// create a template to easy create many objects
function createCircle(radius){
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    }
}

const circle = createCircle(1);
