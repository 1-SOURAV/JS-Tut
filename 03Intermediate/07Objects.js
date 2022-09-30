var user = {
    firstName: "Sourav",
    lastName: "Sharma",
    age: 19,
    rollNo: 1903189,
    course: "B.Tech",
    branch: "CSE",
    fullTime: true,
    courseList: [],
    buyCourse: function(courseName){
        this.courseList.push(courseName)
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled in ${this.courseList.length} courses`;
    },
};

console.table(user.getCourseCount());
user.buyCourse("DSA");
user.buyCourse("Full Stack Dev");
console.log(user.getCourseCount());