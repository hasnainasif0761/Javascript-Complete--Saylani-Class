class Students {
    constructor(sname,sage,sroll){
        this.sname = sname;
        this.sage = sage;
        this.sroll = sroll;
    }
    sdetails (){
        console.log(`My name is ${this.sname} and I am ${this.sage} year old`);
    }
}

const studentObj = new Students('Huzaifa Asif',17);

studentObj.sdetails()