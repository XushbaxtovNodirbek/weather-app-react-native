const GetStyles =  {
    getBackgroundColors: function () {
        if(new Date().getHours() > 6 && new Date().getHours() < 18){
            return ['#018eab','#0b0395']
        }else{
            return ['#0b0395','#000428']
        }
    },
    getStatusBarStyle: function () {
        if(new Date().getHours() > 6 && new Date().getHours() < 18){
            return {style:'light-content',backgroundColor:'#018eab'}
        }else{
            return {style:'light-content',backgroundColor:'#0b0395'}
        }
    },
}

export default GetStyles