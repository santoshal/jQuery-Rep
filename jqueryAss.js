$('document').ready(()=>{
  $('#redCb').click(()=>{
    $('svg').hide();
    $('.redC').show();
    console.log("hi");
  }),
  $('#orangeC').click(()=>{
    $('svg').hide();
    $('.org').show();
    console.log("hi");
  }),

  $('#yellowC').click(()=>{
    $('svg').hide();
    $('.yell').show();
    console.log("hi");
  }),
  
  $('#allC').click(()=>{
    $('svg').show();
    console.log("hi");
  })


})