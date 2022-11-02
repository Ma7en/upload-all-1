


/*  
===============================================
===============================================
*/

/* start upload 1 */

let u1upBtn = document.querySelector(".upload-1 .UP-BTN");


u1upBtn.addEventListener("click", () => {
    document.querySelector(".upload-1 #file").click();
});



/* end upload 1 */

/*  
===============================================
===============================================
*/

/* start upload 2 */

let u2wrapper = document.querySelector(".upload-2 .wrapper");
let u2cancelBtn= document.querySelector(".upload-2 #cancel-btn");
let u2fileName = document.querySelector(".upload-2 .file-name");
let u2defaultBtn = document.querySelector(".upload-2 #default-btn");
let u2customBtn = document.querySelector(".upload-2 #custom-btn");
let u2img = document.querySelector(".upload-2 img");
let u2regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

u2customBtn.addEventListener("click", () => {
    u2defaultBtn.click();
});

u2defaultBtn.addEventListener("change", function() {
    u2img.classList.add("active");
    let file = this.files[0];
    if(file) {
        let reader = new FileReader();
        reader.onload = function() {
            let result = reader.result;
            u2img.src = result;
            u2wrapper.classList.add("active");
        }
        u2cancelBtn.addEventListener("click", function() {
            u2img.src = "";
            u2wrapper.classList.remove("active");
            u2img.classList.remove("active");
        });
        reader.readAsDataURL(file);
    }

    if(this.value) {
        let valueStore = this.value.match(u2regExp);
        u2fileName.textContent = valueStore;
    }
});


/* end upload 2 */

/*  
===============================================
===============================================
*/

/* start upload 3 */


// let u3a = document.querySelector(".upload-3 a");


// window.addEventListener("load", () => {
    // setInterval(() => {
    //     u3a.click();
    // }, 5000);
// });

// setTimeout(() => {
//     u3a.click();
// }, 5000);



/* end upload 3 */

/*  
===============================================
===============================================
*/

/* start upload 4 */



/* end upload 4 */

/*  
===============================================
===============================================
*/

/* start upload 5 */



/* end upload 5 */

/*  
===============================================
===============================================
*/

/* start upload 6 */



/* end upload 6 */

/*  
===============================================
===============================================
*/

/* start upload 7 */



/* end upload 7 */

/*  
===============================================
===============================================
*/

/* start upload 8 */



/* end upload 8 */

/*  
===============================================
===============================================
*/

/* start upload 9 */



/* end upload 9 */

/*  
===============================================
===============================================
*/

/* start upload 10 */



/* end upload 10 */

/*  
===============================================
===============================================
*/

/* start upload 11 */



/* end upload 11 */

/*  
===============================================
===============================================
*/

/* start upload 12 */



/* end upload 12 */

/*  
===============================================
===============================================
*/

/* start upload 13 */



/* end upload 13 */

/*  
===============================================
===============================================
*/

/* start upload 14 */



/* end upload 14 */

/*  
===============================================
===============================================
*/

/* start upload 15 */



/* end upload 15 */

/*  
===============================================
===============================================
*/

