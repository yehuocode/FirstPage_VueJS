new Vue({
    el: '#app',
    data (){
        return {
            courses: [],
            title: '',
            time: 0,
        } 
    },
    computed: {
        totalTime () {
            if (!this.courses.length)
            { 
                return 0 
            }else
            {
                return this.courses.reduce((a, b) => a + parseInt(b[1]), 0)
            }
          }
    },

    methods: {

        addCourse() {
            
            this.courses.push([this.title, this.time])
            // this.courses.push( `Completado el curso: ${this.title} en ${this.time} horas`)
            console.log(this.courses)
        }
    }
})