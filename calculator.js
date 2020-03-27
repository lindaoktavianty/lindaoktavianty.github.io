window.onload = function () {
    document.getElementById("hitungBMI").onclick = function hitungBMI() {
        let yourName = document.getElementById("yourName").value;
        let gender = document.getElementById("gender").value;
        let beratBadan = document.getElementById("beratBadan").value;
        let tinggiBadan = document.getElementById("tinggiBadan").value;

        let rumusBMI = Number(beratBadan) / Math.pow(((Number(tinggiBadan)) / 100), 2)

        if (gender === 'Female') {
            if (rumusBMI < 18.5) {
                alert(`Hi ${yourName}, your BMI is ${rumusBMI} so you are UNDERWEIGHT. You can try to choose whole-grain breads, pastas and cereals, fruits and vegetables, dairy products, lean protein sources, and nuts and seeds.`)
            } else if (rumusBMI >= 18.5 && rumusBMI < 23) {
                alert(`Hi ${yourName}, your BMI is ${rumusBMI} so you are NORMAL. Congrats! Keep up the good work!`)
            } else if (rumusBMI >= 23 && rumusBMI < 25) {
                alert(`Hi ${yourName}, your BMI is ${rumusBMI} so you are OVERWEIGHT. You can try to choose Avocados, Bananas, Yogurt, Berries, Chocolate Skim Milk, and Green Tea.`)
            } else {
                alert(`Hi ${yourName}, your BMI is ${rumusBMI} so you are OBESE. You can try to choose plenty of potatoes, bread, rice, pasta and other starchy foods (ideally you should choose wholegrain varieties). Avoid food and drinks that are high in fat and sugar.`)
            }
        } else {
            if (rumusBMI < 20.8) {
                alert(`Hi ${yourName}, your BMI is ${rumusBMI} so you are UNDERWEIGHT. You can try to choose whole-grain breads, pastas and cereals, fruits and vegetables, dairy products, lean protein sources, and nuts and seeds.`)
            } else if (rumusBMI >= 20.8 && rumusBMI < 25.3) {
                alert(`Hi ${yourName}, your BMI is ${rumusBMI} so you are NORMAL. Congrats! Keep up the good work!`)
            } else if (rumusBMI >= 25.3 && rumusBMI < 27.3) {
                alert(`Hi ${yourName}, your BMI is ${rumusBMI} so you are OVERWEIGHT. You can try to choose Avocados, Bananas, Yogurt, Berries, Chocolate Skim Milk, and Green Tea.`)
            } else {
                alert(`Hi ${yourName}, your BMI is ${rumusBMI} so you are OBESE. You can try to choose plenty of potatoes, bread, rice, pasta and other starchy foods (ideally you should choose wholegrain varieties). Avoid food and drinks that are high in fat and sugar.`)
            }
        }
    }
}