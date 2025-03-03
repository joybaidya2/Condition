
        if(3 < 10){
        console.log("I am small. I do not bite");
    }
    if(13 < 10){
        console.log('Smaller but stronger!');
    }
    
    const biranyPrice = 500;
    if(biranyPrice < 600){
        console.log('Mama, give me biriyani!');
    }

    const num1 = 50;
    const num2 = 100;
    if(num1 < num2){
        console.log('Numer two is larger number');
    }else{
        console.log('Nmber one is larger number');
    }

    const ranningOutside = true;
    if(ranningOutside == true){
        console.log('You and me - under the true');
    }else{
        console.log('No rain, No romance.');
    }

    //Book practice problem
    //Problem number one...
    const time = 6;
    if(time > 7){
        console.log("Ma nasta khaoyabe!");
    }else{
        console.log('Zaru er bari dibe.');
    }

    //Problem number two..
    const text1 = true;
    if(text1 == false){
        console.log('Welcome');
    }else{
        console.log('get lost!');
    }

    // it's problem number three
    const km = 5;
    if(km > 4){
        console.log('I got a choolate');
    }else{
        console.log('Now I am fat');
    }

    //Problem number four.
    const result = 85 ;
    if (80 < result ){
        console.log('My father will buy a bike');
    }else{
        console.log("My father won't buy a bike");
    }

    //Problem Number Five...
    const show = 9;
    if(show > 8){
        console.log("I won't watch a movie");
    }else{
        console.log("I will watch a movie");
    }

    //Problem number six.
    let hot = 30;
    if(hot >= 20){
        console.log('Ami aircondtion chalabo..');
    }else{
        console.log('Ami kombol muri diya gumabo..');
    }

    //Anther conditon start
    const salary = 75000;
    if(salary > 50000){
        console.log("Ami chaile biya korte parbo..");
    }else{
        console.log("Ami biya korte parbo na");
    }

    //Here is the multipole conditon using And 
    const monthlySalary = 63000;
    const BCS = false;
    if(monthlySalary > 50000 && BCS == true){
        console.log('Ami biya korte Parbo');
    }else{
        console.log('Ami biya korte parbo na');
    }

    //Here is use the multipole condition using || or
    const monthSalary = 25001;
    const height = 68;
    if (monthSalary > 25000 || height > 72){
        console.log('bolo baba kobul');
    }else{
        console.log('Vag tui mokbul!');
    }

    //start multipole condition practice problem start
    //Problem number one..
    const age = 18;
    const manHeight = 60;
    if(age < 20 && manHeight < 62){
        console.log('Lokti Car telbe');
    }else{
        console.log("Lokti car a bose thakbe");
    }

    //Problem number two..
    const mathMark = 78;
    const englishMark = 86;
    if(mathMark > 80 || 85 < englishMark){
        console.log('Admisson nite parbe');
    }else{
        console.log('Toke biya diya dibe');
    }

    //Problem number three.
    const gpa = 5;
    const Salary = 18000;
    if(gpa == 5 && Salary < 8000){
        console.log('scallor pabe');
    }else{
        console.log('Taka diya porte hobe!');
    }

    //Problem numbr four..
    const manAge = 28;
    const exprince = 1;
    if(manAge < 30 && exprince > 2){
        console.log('Exam dite parobo');
    }else{
        console.log('Exam dite parbo na');
    }

    //Problem number five..
    const egg = 13;
    const chicken = false;
    if(egg > 12 || chicken == true){
        console.log('Tui egg er korma korbi');
    }else{
        console.log('Paruti r kola khabi');
    }

    //Problem number six..
    const tempercher = 100;
    const kasi = true;
    if(tempercher > 100 || kasi == true){
        console.log("Doctor er kase jabe");
    }else{
        console.log('Katha muri diya gumabe');
    }

    //Problem number seven.
    const present = 76;
    const homework = true;
    if(present > 80 && homework == true){
        console.log('Exam dite daoya hobe');
    }else{
        console.log('Auto Fail');
    }

    //Problem number eight
    const electricity = true;
    const charge = true;
    if(electricity == true && charge == true){
        console.log('I read a book');
    }else{
        console.log('Video game khalbo');
    }

    //last problem .. Problem number nine.
    const shirtPrice = 1000;
    const kupon = true;
    if(shirtPrice > 1000 && kupon == true){
        console.log('Tui discount Pabi');
    }else{
        console.log('kono discount pabi na');
    }

    
    //Else if conditon section start..
    const price = 6500;
    if(price >= 5000){
        const discount = price / 100 * 10;
        const pay = price - discount;
        console.log("The discount Price is : "+pay);
    }else{
        console.log("The main price is : "+price);
    }

    //you buy 5k you have 10% discount but you buy 2500 up you have 5% discount.
    const newPrice = 4000;
    if(newPrice > 5000){
        const discount = newPrice / 100 * 10;
        const pay = newPrice - discount;
        console.log("Here is the 10% discount price is : "+ pay);
    }else if(newPrice > 2500){
        const anotherDiscount = newPrice / 100 * 5;
        const anotherPay = newPrice - anotherDiscount;
        console.log("Here is the 5% discount Price is : "+ anotherPay);
    }else{
        console.log('You buy :'+ newPrice);
    }

    //Start the book practice problem using else if

    const buy = 4500;
    if(buy > 6000){
        const discount = buy / 100 * 15;
        const pay = buy - discount;
        console.log('15% Discount Price is : '+pay);
    }else if(buy > 3000){
        const discount = buy / 100 * 5;
        const pay = buy- discount;
        console.log('5% Dicount price is : '+pay);
    }else{
        console.log('You buy '+buy);
    }

    //Problem number two
    const childrenAge = 11;
    const oldAge = 56;
    if(childrenAge < 12){
        console.log("Childreen Free khabar pabe!");
    }else if(oldAge > 60){
        console.log("50% Discount pabe!");
    }else{
        console.log('full pay korte hobe');
    }

    //Problem number three
    const accountBalnce = 900;
    const anotherBalnce = 4400;
    if(accountBalnce < 100){
        console.log("Dipojit koro");
    }else if(anotherBalnce <= 5000){
        console.log('Bindas life enjoy koro');
    }else{
        console.log('Ameka biya koro');
    }

    //Problem number four..
    const Mark1 = 49;
    if(Mark1 < 50){
        console.log("The student is fail");
    }else if(Mark1 <= 80){
        console.log('The student is pass');
    }else{
        console.log('The student got A+');
    }

    //Problem number five
    const bookPage = 340;
    if(bookPage < 100){
        console.log("Small Book");
    }else if(bookPage <= 500){
        console.log('Mid-size-Book');
    }else{
        console.log('Heart attact size book');
    }

    //Problem number six...
    const tampareture = 12;
    if(tempercher < 0){
        console.log('Ice');
    }else if(tampareture <= 20){
        console.log("Cool Cool");
    }else{
        console.log("Hot Hot");
    }

    //Problem number seven..
    const gameLevel = 34 ;
    if(gameLevel < 10){
        console.log("Novice");
    }else if(gameLevel <=50 ){
        console.log("Expart");
    }else{
        console.log("Pro Gamer")
    }

    //Problem number eight
    const Shopping = 700;
    if(Shopping > 2500){
        const discount = Shopping / 100 * 5;
        const pay = Shopping - discount;
        console.log('You will Pay : '+pay);
    }else if(Shopping > 7999){
        const discount = Shopping / 100 * 20;
        const pay = Shopping - discount;
        console.log("You will pay : "+pay);
    }else if(Shopping > 10000){
        const discount = Shopping / 100 * 50;
        const pay = Shopping - discount;
        console.log('You wiil pay : '+pay);
    }else{
        console.log("No discount! You buy : "+Shopping);
    }





