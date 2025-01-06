const navLinks = document.querySelectorAll('header nav a');
const logoLinks = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuicon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuicon.addEventListener('click', () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
     const header = document.querySelector('header');
     const barsBox = document.querySelector('.bars-box');

     header.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    navLinks.forEach(link => { 
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => { 
        section.classList.remove('active');
    });

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

navLinks.forEach((link, idx) => {
     link.addEventListener('click', () => {
          if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);

          }
     });
});

logoLinks.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portofolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portofolio-box .navigation .arrow-left');

let index = 0;

const activePortofolio = () => {
    const imageSlide = document.querySelector('.portofolio-carousel .img-slide');
    const portofolioDetails = document.querySelectorAll('.portofolio-detail');

    imageSlide.style.transform = 'translateX(calc(${index * -100}% - ${index * 2}rem))';

    portofolioDetails.forEach(detail => {
       detail.classList.remove('active');
    });
    portofolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 5;
        arrowRight.classList.add('disabled');
    }

    activePortofolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.add('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.remove('disabled');
    }

    activePortofolio();
});