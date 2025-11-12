  /*********************************************
   * Create 12 team member cards with a loop
   *********************************************/

  const staffGrid = document.getElementById("staffGrid");
  const team = [
    { name: "King Woody", role: "CEO", image: new URL("../../img/king-woody.jpeg", import.meta.url) },
    { name: "Business Woody", role: "CTO", image: new URL("../../img/business-woody.png", import.meta.url) },
    { name: "Crimelord Woody", role: "Lead Designer", image: new URL("../../img/crimelord-woody.png", import.meta.url) },
    { name: "Family Man Woody", role: "Marketing Director", image: new URL("../../img/family-man-woody.png", import.meta.url) },
    { name: "Unhinged Woody", role: "HR Manager", image: new URL("../../img/unhinged-woody.png", import.meta.url) },
    { name: "Hinged Woody", role: "Project Manager", image: new URL("../../img/hinged-woody.png", import.meta.url) },
    { name: "Hipster Woody", role: "Developer", image: new URL("../../img/hipster-woody.png", import.meta.url) },
    { name: "Mental Woody", role: "UX Researcher", image: new URL("../../img/mental-woody.png", import.meta.url) },
    { name: "Priest Woody", role: "Frontend Engineer", image: new URL("../../img/priest-woody.png", import.meta.url) },
    { name: "Rough Woody", role: "Backend Engineer", image: new URL("../../img/rough-woody.png", import.meta.url) },
    { name: "Tjackis Woody", role: "Data Analyst", image: new URL("../../img/tjackis-woody.png", import.meta.url) },
    { name: "Westlife Woody", role: "QA Tester", image: new URL("../../img/westlife-woody.png", import.meta.url) },
  ];

  for (let i = 0; i < team.length; i++) {
    const member = team[i];
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.src = member.image;
    img.alt = `Photo of ${member.name}`;


    const infoDiv = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = member.name;
    const p = document.createElement("p");
    p.textContent = member.role;
    infoDiv.appendChild(h3);
    infoDiv.appendChild(p);
    article.appendChild(img);
    article.appendChild(infoDiv);
    staffGrid.appendChild(article);
  }
