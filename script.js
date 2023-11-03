document.addEventListener('DOMContentLoaded',() => {
     const faqContent = document.querySelector('.faq-content');
     faqContent.addEventListener('click',(event) => {
          const faqGroupHeader = event.target.closest('.faq-group-header');
          if (!faqGroupHeader) return;
          const group = faqGroupHeader.parentElement;
          const faqGroupBody = group.querySelector('.faq-group-body');
          const i = faqGroupHeader.querySelector('i');
          i.classList.toggle('fa-plus');
          i.classList.toggle('fa-minus');
          faqGroupBody.classList.toggle('open');
          const faqGroup = faqContent.querySelectorAll('.faq-group');
          faqGroup.forEach((otherGroup) => {
               if(otherGroup !== group){
                    const faqGroupBody = otherGroup.querySelector('.faq-group-body');
                    const faqGroupIcon = otherGroup.querySelector('.faq-group-header i');
                    faqGroupBody.classList.remove('open');
                    faqGroupIcon.classList.remove('fa-minus');
                    faqGroupIcon.classList.add('fa-plus');
               }
          });
     });
});
document.addEventListener('DOMContentLoaded',() => {
     const hamburgerButton = document.querySelector('.hamburger-button');
     const mobileMenu = document.querySelector('.mobile-menu');
     hamburgerButton.addEventListener('click',() => {
          mobileMenu.classList.toggle('active');
     });
});