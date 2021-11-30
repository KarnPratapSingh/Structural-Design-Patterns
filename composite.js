class course{
    constructor(name,price){
        this.name=name;
        this.price= price; 
      }


    total(){
        return this.price;
    }

    print(){
        console.log(`${this.name}--${this.price}`);
    }
}


const js= new course('Java Script', 100);
const bootStrap= new course('Bootstrap', 50);

const corel= new course('Corel Draw', 100);
const PS= new course('Photoshop', 100);

console.log(js.total());
js.print();


class groupCourses{
    constructor(name,composite){
        this.name=name;
        this.composite=composite;
        
    }

    total(){
        return this.composite.reduce((result,nextItem)=>{
            result=result+nextItem.total();
            return result;
            
        },0);
    }

    print(){
        console.log(`---------------${this.name}--------------`);
        this.composite.forEach((course)=>{
            course.print();
        });
        console.log('-----------------------------------------');
    }

}

const webCourses=new groupCourses('Web Designing',[js,bootStrap]);
const designCourses=new groupCourses('Graphic Designing',[corel,PS]);
const courses=new groupCourses('all courses',[webCourses,designCourses]);

courses.print();
console.log('Total Price of this group:'+' '+courses.total());

