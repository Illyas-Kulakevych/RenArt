
    setTimeout(async function(){
      const response = await fetch('api/embrace.json');
      const images = await response.json();
  
      displayImages(images);
    }, 100);
  
    
    function displayImages(imgs) {
      const illustrationContainer = document.querySelector(".embrace__illustration--wrapper");
      let illustrationsHtml = '';
      
     
      for (const image of imgs) {
        illustrationsHtml += `
            <img class='${image.class}' src='${image.src}' alt='${image.alt}'>
        `;
      }
      if (illustrationContainer) {
        illustrationContainer.innerHTML = illustrationsHtml;
      } else {
        console.error('Елемент не знайдений');
      }
  
    };
  
  
  