var names=[
    "Hi! I am Ashwini Paudel. I am an only child and I am the creator off this website and many others. Today, I am going to show you my dad's side of the family, including his siblings, nephews and neices.",
    "This is my mother, Yamuna Baral. She is the youngest of 7 children, and her mother(my grandmother) is Rashami Baral.",
    "This is my father, Tula Ram Paudel. He is the 3rd youngest of his 3 siblings, all of them whom I will talk about. He has two girl siblings and one boy.",
    "This is my eldest uncle on my dad's side of the family, Hari Lam Paudel. He is the oldest child of 4, and has 3 kids with his wife, Brinda Baral.",
    "This is my third eldest aunt, Brinda Baral, on my mom's side. She is married to Hari Lam Paudel and they have 3 kids, Kanchan, Komal, and Crystal Paudel.",
    "This is one of my cousins, Kanchan Paudel. She is the eldest of her 3 sisters and is in college, studing to become a nursing assistant.",
    "This is another one of my cousins, Komal Paudel. She is the middle child of her 3 sisters and she is in highschool.",
    "This is Crystal Paudel, the youngest child of Brinda Baral and Hari Paudel. She is one of my cousins and (I think) she is in middle school",
    "This is Bhagwati Paudel, my dad's eldest sister/my oldest aunt on my dad's side of the family. Her and her husband, who I am going to introduce next, have one child.",
    "This is my uncle, Netra Upadhya. His wife is Bhagwati Paudel and he has one child with her.",
    "This is Ayush Adhikari, another one of my cousins. He is an only child and is currently in highschool.",
    "This is Sushila Paudel, my dad's youngest sibling and his younger sister. Her and her husband have 2 kids together.",
    "This is my uncle, Khem Paneru. His wife is Sushila Paudel and he has two kids with her, Kevin and Sophia Paneru",
    "This is my cousin, Kevin Paneru. He is the oldest child of the 2 (He has a younger sister) and he is going into 4th grade(I think). ",
    "This is another of my cousins, Sophia Paneru. She is the youngest from my dad's side of the family (at least as far as I know) and she is going into secondd grade (I think).",
    ];
    var image=[
    "Ashwini.JPG",
    "Yamuna.JPG",
    "Tula.JPG",
    "Hari.png",
    "Brinda.jpg",
    "Kanchan.jpg",
    "Komal.jpg",
    "Crystal.jpg",
    "Bhagabati.JPG",
    "Netra.JPG",
    "Ayush.JPG",
    "Sushila.JPG",
    "Khem.JPG",
    "Kevin.JPG",
    "Sophia.JPG"
    ];
    
    var i=0;
    function y(){
    document.getElementById("nametext").innerHTML=names[i];
    document.getElementById("hi").src=image[i];
    
    i++;
if(i>15){
    i=0
}
}