<?php
/**
 * PHP HTML Cache System
 * Caches HTML output for static pages to improve performance
 */

class PageCache {
    private $cache_dir = __DIR__ . '/cache/html/';
    private $cache_lifetime = 3600; // 1 hour in seconds
    
    public function __construct() {
        // Create cache directory if it doesn't exist
        if (!is_dir($this->cache_dir)) {
            mkdir($this->cache_dir, 0777, true);
        }
    }
    
    /**
     * Get cache filename based on current page
     */
    private function getCacheFile() {
        $page = $_SERVER['REQUEST_URI'];
        $page = trim($page, '/');
        if (empty($page) || $page === 'index.html' || $page === 'index.php') {
            $page = 'index';
        }
        return $this->cache_dir . md5($page) . '.html';
    }
    
    /**
     * Check if cache exists and is valid
     */
    public function isCached() {
        $cache_file = $this->getCacheFile();
        if (!file_exists($cache_file)) {
            return false;
        }
        
        // Check if cache has expired
        if (time() - filemtime($cache_file) > $this->cache_lifetime) {
            unlink($cache_file);
            return false;
        }
        
        return true;
    }
    
    /**
     * Get cached content
     */
    public function getCache() {
        $cache_file = $this->getCacheFile();
        if ($this->isCached()) {
            return file_get_contents($cache_file);
        }
        return false;
    }
    
    /**
     * Save content to cache
     */
    public function setCache($content) {
        $cache_file = $this->getCacheFile();
        file_put_contents($cache_file, $content, LOCK_EX);
        chmod($cache_file, 0644);
    }
    
    /**
     * Clear specific cache or all cache
     */
    public function clearCache($page = null) {
        if ($page === null) {
            // Clear all cache
            $files = glob($this->cache_dir . '*.html');
            foreach ($files as $file) {
                unlink($file);
            }
        } else {
            // Clear specific page cache
            $cache_file = $this->cache_dir . md5($page) . '.html';
            if (file_exists($cache_file)) {
                unlink($cache_file);
            }
        }
    }
}

// Initialize cache system
$cache = new PageCache();

// Serve from cache if available
if ($cache->isCached()) {
    header('Content-Type: text/html; charset=UTF-8');
    header('Cache-Control: public, max-age=3600');
    header('X-Cache: HIT');
    echo $cache->getCache();
    exit;
}

// Capture output for caching
ob_start();
register_shutdown_function(function() {
    global $cache;
    $content = ob_get_clean();
    
    // Cache the content
    $cache->setCache($content);
    
    // Set cache headers
    header('Cache-Control: public, max-age=3600');
    header('X-Cache: MISS');
    
    echo $content;
});
?>