const people = [
    {
      img: "assets/images/person-1_aufeoq.jpg",
        //"https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959121/person-1_aufeoq.jpg",
      name: "peter doe",
      job: "product manager",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis? `,
    },
    {
      img: "assets/images/person-2_ipcjws.jpg",
        //"https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-2_ipcjws.jpg",
      name: "susan doe",
      job: "web developer",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    {
      img: "assets/images/person-3_rxtqvi.jpg",
        //"https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-3_rxtqvi.jpg",
      name: "shola kosoko",
      job: "handy man",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    {
      img: "assets/images/fash.jpg",
        //"https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-3_rxtqvi.jpg",
      name: "ayodele balogun",
      job: "banker",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    {
      img: "assets/images/airstar.jpg",
        //"https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-3_rxtqvi.jpg",
      name: "esther okon",
      job: "fashion designer",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    {
      img: "assets/images/chico.jpg",
        //"https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-3_rxtqvi.jpg",
      name: "ibrahim usman",
      job: "pilot",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    {
      img: "assets/images/user2.png",
        //"https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-3_rxtqvi.jpg",
      name: "susan rose",
      job: "model",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    {
      img: "assets/images/user21.jpg",
        //"https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-3_rxtqvi.jpg",
      name: "anthony joshua",
      job: "software engineer",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
   
  ];
  
  
	const testimonials = document.querySelector('.testimonials');
	//const nextBtnTest = document.querySelector('.next-btn-testimonial');
	//const prevBtnTest = document.querySelector('.prev-btn-testimonial');
	
	testimonials.innerHTML = people.map((person, personIndex) => {
		const {img, name, job, text} = person;
		let position = "next-slide-testimonial";
		if(personIndex === 0){
			position = "active-slide-testimonial";
		}
		if(personIndex === people.length - 1){
			position = "last-slide-testimonial";
		}
		if(people.length === 1){
			position = "active-slide-testimonial";
			//hide the next and prev buttons
			//nextBtnTest.style.display = "none";
			//prevBtnTest.style.display = "none";
		}
		return `
			<div class="testimonial-slide ${position}">
				<img src=${img} alt="first slide">
				<h4>${name}</h4>
				<p class="title">${job}</p>
				<p class="text">
					<sup><i class='quote fas fa-quote-left'></i></sup> ${text} <sup><i class='quote fas fa-quote-right'></i></sup>
				</p>
			</div> 
		`
	}).join("");

	function startSlideTest(prev){
		const activeSlide = document.querySelector('.active-slide-testimonial');
		let nextSlide = activeSlide.nextElementSibling;
		const lastSlide = document.querySelector('.last-slide-testimonial');

		//in case nextSlide is null
		if(!nextSlide){
			nextSlide = testimonials.firstElementChild;
		}

		//first remove all slide classes
		activeSlide.classList.remove('active-slide-testimonial');
		nextSlide.classList.remove('next-slide-testimonial');
		lastSlide.classList.remove('last-slide-testimonial');

		if(prev && prev === "prev"){
			activeSlide.classList.add('next-slide-testimonial'); 
			lastSlide.classList.add('active-slide-testimonial');
			nextSlide.classList.add('last-slide-testimonial');
			return;
		}

		activeSlide.classList.add('last-slide-testimonial');
		nextSlide.classList.add('active-slide-testimonial');
		lastSlide.classList.add('next-slide-testimonial');
	}
	
	/*nextBtnTest.addEventListener("click", function(){
		startSlideTest();
	});

	prevBtnTest.addEventListener("click", function(){
		startSlideTest('prev');
	});*/

	//auto slider
	const startSliderTest = setInterval(() => {
		startSlideTest();
	}, 5000);

	
	

  