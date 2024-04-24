window.addEventListener(('load'), () => {
    loadabout()
});

function loadabout() {
    const about = document.getElementById("about");
    about.innerHTML = ` <p>Hello! My name is <strong>Nkosingiphile Phungula</strong>.
    I'm a final year student at the Durban University of Technology (DUT),
     majoring in Information and Communication Technology. 
      have a strong passion for technology and its ability to solve complex problems,
       improve efficiency, and make life easier. Over the course of my studies, I've gained proficiency in several programming languages including
        <strong>Python</strong>, <strong>C#</strong>, <strong>HTML</strong>, and <strong>CSS</strong>. These skills have enabled me to work on a variety of projects and assignments,
         further solidifying my understanding and application of these languages. As I approach the completion of my degree, I'm eager to apply what I've learned in a real-world setting. 
         I'm always looking for opportunities to grow, learn, and contribute to the field of ICT. I believe that with my strong technical skills and dedication, I can make a significant impact in my future role. 
         Thank you for taking the time to learn more about me. I look forward to the possibility of working together!</p>
       
    `;
}