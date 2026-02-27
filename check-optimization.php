<?php
/**
 * Performance Optimization Setup & Verification Script
 * Run this to verify all optimizations are properly configured
 */

class OptimizationCheck {
    public $results = [];
    
    public function run() {
        echo "=== Hatch Website Performance Check ===\n\n";
        
        $this->checkHTTPS();
        $this->checkApacheModules();
        $this->checkCacheDirectory();
        $this->checkFilePaths();
        $this->checkServerSettings();
        $this->displayResults();
    }
    
    private function checkHTTPS() {
        echo "Checking HTTPS Configuration...\n";
        $htaccess = __DIR__ . '/.htaccess';
        
        if (file_exists($htaccess)) {
            $content = file_get_contents($htaccess);
            if (strpos($content, 'RewriteCond %{HTTPS} off') !== false) {
                $this->results['HTTPS'] = ['✓ PASS', 'HTTPS forcing is configured'];
                echo "✓ HTTPS enforcement found in .htaccess\n";
            } else {
                $this->results['HTTPS'] = ['✗ FAIL', '.htaccess exists but HTTPS not configured'];
                echo "✗ HTTPS not configured\n";
            }
        } else {
            $this->results['HTTPS'] = ['✗ FAIL', '.htaccess not found'];
            echo "✗ .htaccess not found\n";
        }
        echo "\n";
    }
    
    private function checkApacheModules() {
        echo "Checking Apache Modules...\n";
        
        $modules = [
            'mod_rewrite' => 'URL Rewriting',
            'mod_deflate' => 'Gzip Compression',
            'mod_expires' => 'Cache Expiration',
            'mod_headers' => 'HTTP Headers'
        ];
        
        if (function_exists('apache_get_modules')) {
            $loaded = apache_get_modules();
            
            foreach ($modules as $module => $description) {
                if (in_array($module, $loaded)) {
                    $this->results[$module] = ['✓ PASS', $description];
                    echo "✓ $module - $description\n";
                } else {
                    $this->results[$module] = ['✗ FAIL', "$description - NOT LOADED"];
                    echo "✗ $module - NOT LOADED\n";
                }
            }
        } else {
            echo "⚠ Cannot detect Apache modules (running on OpenLightSpeed?)\n";
            $this->results['ModuleCheck'] = ['⚠ INFO', 'Using OpenLightSpeed or cannot detect modules'];
        }
        echo "\n";
    }
    
    private function checkCacheDirectory() {
        echo "Checking Cache Directory...\n";
        
        $cache_dir = __DIR__ . '/cache/html/';
        
        if (!is_dir($cache_dir)) {
            if (@mkdir($cache_dir, 0777, true)) {
                $this->results['CacheDir'] = ['✓ PASS', 'Cache directory created'];
                echo "✓ Cache directory created: $cache_dir\n";
            } else {
                $this->results['CacheDir'] = ['✗ FAIL', 'Cannot create cache directory'];
                echo "✗ Cannot create cache directory\n";
            }
        } else {
            if (is_writable($cache_dir)) {
                $this->results['CacheDir'] = ['✓ PASS', 'Cache directory writable'];
                echo "✓ Cache directory is writable\n";
            } else {
                $this->results['CacheDir'] = ['✗ FAIL', 'Cache directory not writable'];
                echo "✗ Cache directory not writable\n";
            }
        }
        echo "\n";
    }
    
    private function checkFilePaths() {
        echo "Checking Required Files...\n";
        
        $files = [
            '.htaccess' => 'Apache Configuration',
            'cache-handler.php' => 'PHP Cache Handler',
            'openlightspeed-cache.conf' => 'OpenLightSpeed Config',
            'OPTIMIZATION_GUIDE.md' => 'Documentation'
        ];
        
        foreach ($files as $file => $description) {
            $path = __DIR__ . '/' . $file;
            if (file_exists($path)) {
                $this->results[$file] = ['✓ PASS', $description];
                echo "✓ $file - $description\n";
            } else {
                $this->results[$file] = ['✗ FAIL', "$file not found"];
                echo "✗ $file - NOT FOUND\n";
            }
        }
        echo "\n";
    }
    
    private function checkServerSettings() {
        echo "Checking Server Settings...\n";
        
        // Check if running HTTPS
        if (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') {
            $this->results['CurrentHTTPS'] = ['✓ PASS', 'Currently running over HTTPS'];
            echo "✓ Currently running over HTTPS\n";
        } else {
            $this->results['CurrentHTTPS'] = ['⚠ INFO', 'Currently running over HTTP (expected for localhost)'];
            echo "⚠ Currently running over HTTP\n";
        }
        
        // PHP Version
        $this->results['PHPVersion'] = ['✓ INFO', 'PHP ' . phpversion()];
        echo "✓ PHP Version: " . phpversion() . "\n";
        
        // Memory limit
        $memory = ini_get('memory_limit');
        $this->results['MemoryLimit'] = ['✓ INFO', 'Memory Limit: ' . $memory];
        echo "✓ Memory Limit: $memory\n";
        
        echo "\n";
    }
    
    private function displayResults() {
        echo "=== SUMMARY ===\n";
        $pass = 0;
        $fail = 0;
        $info = 0;
        
        foreach ($this->results as $check => $result) {
            if (strpos($result[0], 'PASS') !== false) {
                $pass++;
            } elseif (strpos($result[0], 'FAIL') !== false) {
                $fail++;
            } else {
                $info++;
            }
        }
        
        echo "✓ Passed: $pass\n";
        echo "✗ Failed: $fail\n";
        echo "ℹ Info: $info\n";
        echo "\n";
        
        if ($fail > 0) {
            echo "⚠ Some checks failed. Please review the failed items above.\n";
        } else {
            echo "✓ All critical checks passed! Your site is optimized.\n";
        }
        
        echo "\nNext Steps:\n";
        echo "1. Enable Apache modules if any are missing\n";
        echo "2. Ensure SSL certificate is installed\n";
        echo "3. Test performance with Google PageSpeed Insights\n";
        echo "4. Monitor cache hits in the X-Cache header\n";
    }
}

// Run checks
$checker = new OptimizationCheck();
$checker->run();
?>