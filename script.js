alert("Welcome")
$(document).ready(function(){

    $("#pro1").hide(3000).slideDown(3000,function(){
        $("#pro2").slideUp(3000).show(3000,function(){
            $("#pro3").fadeOut(3000).slideDown(3000,function(){
                $(".main1").hide(6000).slideDown(4000,function(){
                    $("#headerall").hide(4000).show(4000,function(){
                        $(".header1").slideUp(3000).slideDown(5000,function(){
                            $(".header3").fadeOut(2000).slideDown(5000,function(){
                                $(".all-1").slideUp(10000).slideDown(9000)  
                            })  
                        })   
                    })  
                })
            })
        })
    })
})

// Second

// $(document).ready(function(){
//     // alert("Welcome ")
//     $("#headerall").hide(4000).show(4000,function(){
//         $(".header1").slideUp(3000).slideDown(5000,function(){
//             $(".header3").fadeOut(2000).slideDown(5000,function(){
//                 $(".all-1").slideUp(10000).slideDown(9000)
//             })
//         })
//     })

// })