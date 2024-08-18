// Add a check for mobile devices
const isMobile = window.innerWidth <= 767; // You can adjust this breakpoint based on your design


function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     imgs/horse/turn02_0000.png
     imgs/horse/turn02_0001.png
     imgs/horse/turn02_0002.png
     imgs/horse/turn02_0003.png
     imgs/horse/turn02_0004.png
     imgs/horse/turn02_0005.png
     imgs/horse/turn02_0006.png
     imgs/horse/turn02_0007.png
     imgs/horse/turn02_0008.png
     imgs/horse/turn02_0009.png
     imgs/horse/turn02_0010.png
     imgs/horse/turn02_0011.png
     imgs/horse/turn02_0012.png
     imgs/horse/turn02_0013.png
     imgs/horse/turn02_0014.png
     imgs/horse/turn02_0015.png
     imgs/horse/turn02_0016.png
     imgs/horse/turn02_0017.png
     imgs/horse/turn02_0018.png
     imgs/horse/turn02_0019.png
     imgs/horse/turn02_0020.png
     imgs/horse/turn02_0021.png
     imgs/horse/turn02_0022.png
     imgs/horse/turn02_0023.png
     imgs/horse/turn02_0024.png
     imgs/horse/turn02_0025.png
     imgs/horse/turn02_0026.png
     imgs/horse/turn02_0027.png
     imgs/horse/turn02_0028.png
     imgs/horse/turn02_0029.png
     imgs/horse/turn02_0030.png
     imgs/horse/turn02_0031.png
     imgs/horse/turn02_0032.png
     imgs/horse/turn02_0033.png
     imgs/horse/turn02_0034.png
     imgs/horse/turn02_0035.png
     imgs/horse/turn02_0036.png
     imgs/horse/turn02_0037.png
     imgs/horse/turn02_0038.png
     imgs/horse/turn02_0039.png
     imgs/horse/turn02_0040.png
     imgs/horse/turn02_0041.png
     imgs/horse/turn02_0042.png
     imgs/horse/turn02_0043.png
     imgs/horse/turn02_0044.png
     imgs/horse/turn02_0045.png
     imgs/horse/turn02_0046.png
     imgs/horse/turn02_0047.png
     imgs/horse/turn02_0048.png
     imgs/horse/turn02_0049.png
     imgs/horse/turn02_0050.png
     imgs/horse/turn02_0051.png
     imgs/horse/turn02_0052.png
     imgs/horse/turn02_0053.png
     imgs/horse/turn02_0054.png
     imgs/horse/turn02_0055.png
     imgs/horse/turn02_0056.png
     imgs/horse/turn02_0057.png
     imgs/horse/turn02_0058.png
     imgs/horse/turn02_0059.png
     imgs/horse/turn02_0060.png
     imgs/horse/turn02_0061.png
     imgs/horse/turn02_0062.png
     imgs/horse/turn02_0063.png
     imgs/horse/turn02_0064.png
     imgs/horse/turn02_0065.png
     imgs/horse/turn02_0066.png
     imgs/horse/turn02_0067.png
     imgs/horse/turn02_0068.png
     imgs/horse/turn02_0069.png
     imgs/horse/turn02_0070.png
     imgs/horse/turn02_0071.png
     imgs/horse/turn02_0072.png
     imgs/horse/turn02_0073.png
     imgs/horse/turn02_0074.png
     imgs/horse/turn02_0075.png
     imgs/horse/turn02_0076.png
     imgs/horse/turn02_0077.png
     imgs/horse/turn02_0078.png
     imgs/horse/turn02_0079.png
     imgs/horse/turn02_0080.png
     imgs/horse/turn02_0081.png
     imgs/horse/turn02_0082.png
     imgs/horse/turn02_0083.png
     imgs/horse/turn02_0084.png
     imgs/horse/turn02_0085.png
     imgs/horse/turn02_0086.png
     imgs/horse/turn02_0087.png
     imgs/horse/turn02_0088.png
     imgs/horse/turn02_0089.png
     imgs/horse/turn02_0090.png
     imgs/horse/turn02_0091.png
     imgs/horse/turn02_0092.png
     imgs/horse/turn02_0093.png
     imgs/horse/turn02_0094.png
     imgs/horse/turn02_0095.png
     imgs/horse/turn02_0096.png
     imgs/horse/turn02_0097.png
     imgs/horse/turn02_0098.png
     imgs/horse/turn02_0099.png
     imgs/horse/turn02_0100.png
     imgs/horse/turn02_0101.png
     imgs/horse/turn02_0102.png
     imgs/horse/turn02_0103.png
     imgs/horse/turn02_0104.png
     imgs/horse/turn02_0105.png
     imgs/horse/turn02_0106.png
     imgs/horse/turn02_0107.png
     imgs/horse/turn02_0108.png
     imgs/horse/turn02_0109.png
     imgs/horse/turn02_0110.png
     imgs/horse/turn02_0111.png
     imgs/horse/turn02_0112.png
     imgs/horse/turn02_0113.png
     imgs/horse/turn02_0114.png
     imgs/horse/turn02_0115.png
     imgs/horse/turn02_0116.png
     imgs/horse/turn02_0117.png
     imgs/horse/turn02_0118.png
     imgs/horse/turn02_0119.png
     imgs/horse/turn02_0120.png
     imgs/horse/turn02_0121.png
     imgs/horse/turn02_0122.png
     imgs/horse/turn02_0123.png
     imgs/horse/turn02_0124.png
     imgs/horse/turn02_0125.png
     imgs/horse/turn02_0126.png
     imgs/horse/turn02_0127.png
     imgs/horse/turn02_0128.png
     imgs/horse/turn02_0129.png
     imgs/horse/turn02_0130.png
     imgs/horse/turn02_0131.png
     imgs/horse/turn02_0132.png
     imgs/horse/turn02_0133.png
     imgs/horse/turn02_0134.png
     imgs/horse/turn02_0135.png
     imgs/horse/turn02_0136.png
     imgs/horse/turn02_0137.png
     imgs/horse/turn02_0138.png
     imgs/horse/turn02_0139.png
     imgs/horse/turn02_0140.png
     imgs/horse/turn02_0141.png
     imgs/horse/turn02_0142.png
     imgs/horse/turn02_0143.png
     imgs/horse/turn02_0144.png
     imgs/horse/turn02_0145.png
     imgs/horse/turn02_0146.png
     imgs/horse/turn02_0147.png
     imgs/horse/turn02_0148.png
     imgs/horse/turn02_0149.png
     imgs/horse/turn02_0150.png
     imgs/horse/turn02_0151.png
     imgs/horse/turn02_0152.png
     imgs/horse/turn02_0153.png
     imgs/horse/turn02_0154.png
     imgs/horse/turn02_0155.png
     imgs/horse/turn02_0156.png
     imgs/horse/turn02_0157.png
     imgs/horse/turn02_0158.png
     imgs/horse/turn02_0159.png
     imgs/horse/turn02_0160.png
     imgs/horse/turn02_0161.png
     imgs/horse/turn02_0162.png
     imgs/horse/turn02_0163.png
     imgs/horse/turn02_0164.png
     imgs/horse/turn02_0165.png
     imgs/horse/turn02_0166.png
     imgs/horse/turn02_0167.png
     imgs/horse/turn02_0168.png
     imgs/horse/turn02_0169.png
     imgs/horse/turn02_0170.png
     imgs/horse/turn02_0171.png
     imgs/horse/turn02_0172.png
     imgs/horse/turn02_0173.png
     imgs/horse/turn02_0174.png
     imgs/horse/turn02_0175.png
     imgs/horse/turn02_0176.png
     imgs/horse/turn02_0177.png
     imgs/horse/turn02_0178.png
     imgs/horse/turn02_0179.png
     imgs/horse/turn02_0180.png
     imgs/horse/turn02_0181.png
     imgs/horse/turn02_0182.png
     imgs/horse/turn02_0183.png
     imgs/horse/turn02_0184.png
     imgs/horse/turn02_0185.png
     imgs/horse/turn02_0186.png
     imgs/horse/turn02_0187.png
     imgs/horse/turn02_0188.png
     imgs/horse/turn02_0189.png
     imgs/horse/turn02_0190.png
     imgs/horse/turn02_0191.png
     imgs/horse/turn02_0192.png
     imgs/horse/turn02_0193.png
     imgs/horse/turn02_0194.png
     imgs/horse/turn02_0195.png
     imgs/horse/turn02_0196.png
     imgs/horse/turn02_0197.png
     imgs/horse/turn02_0198.png
     imgs/horse/turn02_0199.png
     imgs/horse/turn02_0200.png
     imgs/horse/turn02_0201.png
     imgs/horse/turn02_0202.png
     imgs/horse/turn02_0203.png
     imgs/horse/turn02_0204.png
     imgs/horse/turn02_0205.png
     imgs/horse/turn02_0206.png
     imgs/horse/turn02_0207.png
     imgs/horse/turn02_0208.png
     imgs/horse/turn02_0209.png
     imgs/horse/turn02_0210.png
     imgs/horse/turn02_0211.png
     imgs/horse/turn02_0212.png
     imgs/horse/turn02_0213.png
     imgs/horse/turn02_0214.png
     imgs/horse/turn02_0215.png
     imgs/horse/turn02_0216.png
     imgs/horse/turn02_0217.png
     imgs/horse/turn02_0218.png
     imgs/horse/turn02_0219.png
     imgs/horse/turn02_0220.png
     imgs/horse/turn02_0221.png
     imgs/horse/turn02_0222.png
     imgs/horse/turn02_0223.png
     imgs/horse/turn02_0224.png
     imgs/horse/turn02_0225.png
     imgs/horse/turn02_0226.png
     imgs/horse/turn02_0227.png
     imgs/horse/turn02_0228.png
     imgs/horse/turn02_0229.png
     imgs/horse/turn02_0230.png
     imgs/horse/turn02_0231.png
     imgs/horse/turn02_0232.png
     imgs/horse/turn02_0233.png
     imgs/horse/turn02_0234.png
     imgs/horse/turn02_0235.png
     imgs/horse/turn02_0236.png
     imgs/horse/turn02_0237.png
     imgs/horse/turn02_0238.png
     imgs/horse/turn02_0239.png
     imgs/horse/turn02_0240.png
     imgs/horse/turn02_0241.png
     imgs/horse/turn02_0242.png
     imgs/horse/turn02_0243.png
     imgs/horse/turn02_0244.png
     imgs/horse/turn02_0245.png
     imgs/horse/turn02_0246.png
     imgs/horse/turn02_0247.png
     imgs/horse/turn02_0248.png
     imgs/horse/turn02_0249.png
     imgs/horse/turn02_0250.png
     imgs/horse/turn02_0251.png
     imgs/horse/turn02_0252.png
     imgs/horse/turn02_0253.png
     imgs/horse/turn02_0254.png
     imgs/horse/turn02_0255.png
     imgs/horse/turn02_0256.png
     imgs/horse/turn02_0257.png
     imgs/horse/turn02_0258.png
     imgs/horse/turn02_0259.png
     imgs/horse/turn02_0260.png
     imgs/horse/turn02_0261.png
     imgs/horse/turn02_0262.png
     imgs/horse/turn02_0263.png
     imgs/horse/turn02_0264.png
     imgs/horse/turn02_0265.png
     imgs/horse/turn02_0266.png
     imgs/horse/turn02_0267.png
     imgs/horse/turn02_0268.png
     imgs/horse/turn02_0269.png
     imgs/horse/turn02_0270.png
     imgs/horse/turn02_0271.png
     imgs/horse/turn02_0272.png
     imgs/horse/turn02_0273.png
     imgs/horse/turn02_0274.png
     imgs/horse/turn02_0275.png
     imgs/horse/turn02_0276.png
     imgs/horse/turn02_0277.png
     imgs/horse/turn02_0278.png
     imgs/horse/turn02_0279.png
     imgs/horse/turn02_0280.png
     imgs/horse/turn02_0281.png
     imgs/horse/turn02_0282.png
     imgs/horse/turn02_0283.png
     imgs/horse/turn02_0284.png
     imgs/horse/turn02_0285.png
     imgs/horse/turn02_0286.png
     imgs/horse/turn02_0287.png
     imgs/horse/turn02_0288.png
     imgs/horse/turn02_0289.png
     imgs/horse/turn02_0290.png
     imgs/horse/turn02_0291.png
     imgs/horse/turn02_0292.png
     imgs/horse/turn02_0293.png
     imgs/horse/turn02_0294.png
     imgs/horse/turn02_0295.png
     imgs/horse/turn02_0296.png
     imgs/horse/turn02_0297.png
     imgs/horse/turn02_0298.png
     imgs/horse/turn02_0299.png
     imgs/horse/turn02_0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);

  // Adjust the ratio for mobile devices
  ratio *= 0.8;
  if (isMobile) {
    ratio *= 1; // You can adjust this scaling factor based on your design
  }

  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  
  // Position the image at the top of the canvas
  var centerShift_y = 0; 

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

// Modify the media query for mobile devices
if (isMobile) {
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
}


ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `500% top`,
  onUpdate: (self) => {
    
    if (self.isActive) {
      // Show images when scrolling within the specified range
      gsap.set(".click_graphics", { opacity: 1, pointerEvents: "auto" ,duration: 0.5});
    } else {
      // Hide images when scrolling outside the specified range
      gsap.set(".click_graphics", { opacity: 0, pointerEvents: "none" });
      gsap.set("#page2", { opacity: 1, pointerEvents: "auto" ,duration: 0.5});
      gsap.set("#page3", { opacity: 1, pointerEvents: "auto" ,duration: 0.5});
    }
  },
});




gsap.to("#page3", {
  scrollTrigger: {
    trigger: "#page",
    start: "bottom top", // Trigger when the bottom of #page reaches the top of the viewport
    end: "+=100%", // Adjust this value based on your design
    pin: true, // Pin #page1 during the scroll
    pinSpacing: false, // Disable automatic spacing adjustment
    scroller: "#main",
    scrub: true, // Smoothly transition between #page and #page1
  },
});



gsap.set(".layout", { bottom: "100%", opacity: 1 });
gsap.to(".layout", {
  bottom: 0,
  opacity: 1,
  ease: "power2.inOut", // يمكنك تغيير هذا حسب التفضيلات
  duration: 2, // يمكنك ضبط مدة التأثير
  delay: 1, // يمكنك ضبط تأخير بداية التأثير
});

gsap.to("#page", {
  opacity: 1,
  ease: "power2.inOut", // يمكنك تغيير هذا حسب التفضيلات
  duration: 2, // يمكنك ضبط مدة التأثير
  delay: 2, // يمكنك ضبط تأخير بداية التأثير
});
gsap.to("#nav", {
  opacity: 1,
  ease: "power2.inOut", // يمكنك تغيير هذا حسب التفضيلات
  duration: 2, // يمكنك ضبط مدة التأثير
  delay: 1.5, // يمكنك ضبط تأخير بداية التأثير
});
gsap.to(".click_graphics", {
  opacity: 1,
  ease: "power2.inOut", // يمكنك تغيير هذا حسب التفضيلات
  duration: 2, // يمكنك ضبط مدة التأثير
  delay: 1.5, // يمكنك ضبط تأخير بداية التأثير
});
gsap.to(".layout", {
  opacity: 0,
  display:'none',
  ease: "power2.inOut", // يمكنك تغيير هذا حسب التفضيلات
  duration: 2, // يمكنك ضبط مدة التأثير
  delay: 2, // يمكنك ضبط تأخير بداية التأثير
});

// ------------------------------------ For Icons on Header -------------------------

document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.click_graphics');

  elements.forEach(element => {
    element.addEventListener('click', function () {
      // إضافة تأثير الاهتزاز
      element.classList.add('shake');

      // إضافة تأثير التوهج
      setTimeout(() => {
        element.classList.remove('shake');
        element.classList.add('glow');

        // إزالة التأثيرات بعد 1 ثانية
        setTimeout(() => {
          element.classList.remove('shake', 'glow');
        }, 10);
      }, 500);
    });
  });
});
// --------------------------------- For Mose Move ------------------------------
(function () {
  const links = document.querySelectorAll('a');
  const cursor = document.querySelector('.cursor');

  const editCursor = e => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  };

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(4)';
    });

    link.addEventListener('mouseleave', () => {
      cursor.style.transform = '';
    });
  });

  window.addEventListener('mousemove', editCursor);
  const btnVideo = document.querySelector('.btnVideo');

  // const editCursorVideo = e => {
  //   const { clientX: x, clientY: y } = e;
  //   btnVideo.style.left = x + 'px';
  //   btnVideo.style.top = y + 'px';
  // };
  var spanV =cursor.querySelector('span')
  var page2 = document.getElementById('page2')
  page2.addEventListener('mousemove', function(){
    spanV.style.display="block";
    cursor.style.transform = 'scale(4)';
    cursor.style.backgroundColor='blue';
    cursor.style.mixBlendMode='normal';
  });
  page2.addEventListener('mouseleave', function(){
    spanV.style.display="none";
    cursor.style.transform = 'scale(1)';
    cursor.style.backgroundColor='#fff';
    cursor.style.color='#fff';
    cursor.style.mixBlendMode='difference';
  })



//   const page3 = document.querySelector('#page3');

// page3.addEventListener('mouseenter', () => {
//   cursor.style.display='none';
// });
// page3.addEventListener('mouseleave', () => {
//   cursor.style.display='flex';
// });

})();



//Video Play Pause Control Start
let playButton = document.getElementById("play_button");
let playBtnBlue = document.getElementById("playBtn");
let pauseButton = document.getElementById("pause_button");
playButton.addEventListener("click", function() {
  video.play();
  playBtnBlue.innerText="stop";
  playButton.classList.add('vplay');
  pauseButton.classList.remove('vpause');
  document.querySelector('html').classList.add('playvideo');
});

pauseButton.addEventListener("click", function() {
	video.pause();
  playBtnBlue.innerText="play";
	 playButton.classList.remove('vplay');
  pauseButton.classList.add('vpause');
});
//Video Play Pause Control End
//Video Sound on & off Ctrl Start
let soundOff = document.getElementById("sound-off");
let soundOn = document.getElementById("sound-on");
let soundCtrl = document.querySelector(".sound-ctrl");

soundOff.addEventListener("click", function() {
 video.muted = true;
 soundCtrl.classList.add('soundctrlshow');
});

soundOn.addEventListener("click", function() {
	video.muted = false;
	soundCtrl.classList.remove('soundctrlshow'); 
});
//Video Sound on & off Ctrl End
video.onended = function() {
		document.querySelector('html').classList.remove('playvideo');
	 playButton.classList.remove('vplay');
   playBtnBlue.innerText = "play";

};


// Start Slider3D 
/*
|------------------------------------------------------
|  JS: Swiper
|------------------------------------------------------
*/

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3.4,
	spaceBetween: 25,
	breakpoints: {
		1024: {
			slidesPerView: 3.4,
			spaceBetween: 25,
		},
		768: {
			slidesPerView: 2.4,
			spaceBetween: 25,
		},
		640: {
			slidesPerView: 1.4,
			spaceBetween: 25,
		},
		320: {
			slidesPerView: 1.1,
			spaceBetween: 25,
		}
	},
	centeredSlides: true,
	grabCursor: true,
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	clickable: true,
  // },
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slideToClickedSlide: true,
});

/*
|------------------------------------------------------
|  JS: Cards with Fullscreen zoom
|------------------------------------------------------
*/


// Dog Notifications

// Array of random notifications
const notifications = [
  "I’m here to brighten your day",
  "New message!",
  "You have a notification.",
  "Welcome to the website!",
  // Add more notifications as needed
];

let soundPlayed = false;
let imageShown = false;

function showRandomNotification() {
  const randomIndex = Math.floor(Math.random() * notifications.length);
  const randomNotification = notifications[randomIndex];
  document.getElementById('notification').innerText = randomNotification;

  const notificationSound = document.getElementById('notificationSound');

  // تشغيل الرنة إذا لم تكن قد تم تشغيلها بالفعل
  if (!soundPlayed) {
    // notificationSound.play();
    soundPlayed = true;

    // إعادة تعيين الحالة بعد فترة زمنية (هنا 2 ثانية)
    setTimeout(() => {
      soundPlayed = false;
    }, 100);
  }

  // عرض الصورة إذا لم تكن قد تم عرضها بالفعل
  if (!imageShown) {
    shakeDog();
    imageShown = true;

    // إعادة تعيين الحالة بعد فترة زمنية (هنا 500 مللي ثانية)
    setTimeout(() => {
      imageShown = false;
    }, 100);
  }

  // استمع لحدث انتهاء التشغيل لتفعيل الاهتزاز بعد انتهاء الصوت
  notificationSound.onended = () => {
    shakeDog();
  };
}

function shakeDog() {
  const dogImage = document.getElementById('dogImage');
  dogImage.style.animation = 'shake 0.5s';
  setTimeout(() => {
    dogImage.style.animation = '';
  }, 500);
}

// استمع لحدث النقر لتحديث الإشعار والاهتزاز
document.getElementById('dog').addEventListener('click', () => {
  showRandomNotification();
});


// تحديث الإشعار بشكل دوري
setInterval(() => {
  showRandomNotification();
}, 50000);
