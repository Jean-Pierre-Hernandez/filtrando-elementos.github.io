$(document).ready(function(){
    
    //agregamdo clase active al primer enalces===================
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');
   //filtrando prodcutos================================
    $('.category_item').click(function(){

        var catProduct = $(this).attr('category');
        console.log(catProduct);

        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        //ocultando productos======================
        $('.product-item').css('transform', 'scale(0)');
        function hideProduct(){
            $('.product-item').hide();
        }setTimeout(hideProduct,300);

        
        //mostrar productos=================
        function showProduct(){
            $('.product-item[category="'+catProduct+'"]').show();
            $('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
            
        }setTimeout(showProduct,300);
        
    });

    //mostrando todos los productos
    $('.category_item[category="all"]').click(function(){
        function showAll(){
            $('.product-item').show()
            $('.product-item').css('transform', 'scale(1)');
        }setTimeout(showAll,300);  
    });
});