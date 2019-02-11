function getCatalog(items) {
    var $catalog = document.getElementById('catalog');
    
    if(items && items.length) {
        for (j = 0; j < items.length; j++) {
            var $catalogList = document.createElement('div');
            $catalogList.classList.add('catalog_list');
            var $catalogUl = document.createElement('ul');
            $catalogUl.classList.add('catalog_ul');
            
            for (var prop in items[j]) {
                var $catalogLi = document.createElement('li');
                $catalogLi.classList.add('catalog_li');
                $catalogLi.textContent = items[j][prop];
                
                $catalogUl.appendChild($catalogLi);
            }
            $catalogList.appendChild($catalogUl);
               $catalog.appendChild($catalogList);
        }
     
        
    } else {
        var $emptyCatalog = document.createElement('div');
        $emptyCatalog.classList.add ('empty_catalog');
        $emptyCatalog.textContent = ' Мы пока ничего не продаем :( ';
        $catalog.appendChild($emptyCatalog);
    }
    
}


var catalogList = [
{
     product: 'Название товара',
     price: ' Цена '
 },
 {
     product: 'Шляпа',
     price: 50
 },
     {
     product: 'Куртка',
     price: 100     
 },
     {
     product: 'Джинсы',
     price: 150     
 }
]

getCatalog(catalogList);

function getCart(item) {
    var $cart = document.getElementById('cart');
        
    var $cartCount = document.createElement('div');
    $cartCount.classList.add('cart_count');
    document.body.appendChild($cartCount);
    
     var cartSum = 0;
     var quantitySum = 0;
    
    if (item&&item.length) {
        // в корзине есть товары
        for (i=0; i < item.length; i++) {
            var $div = document.createElement('div');
            $div.classList.add('product');
            var $ul = document.createElement('ul');
            $ul.classList.add ('product_list')
            
            for (var prop in item[i]) {
                var $li = document.createElement('li');
                $li.textContent = prop + ':' + item[i][prop];
                
                   $ul.appendChild($li);
            }
            
        $div.appendChild($ul);
        $cart.appendChild($div);
             
            var $cartSum = document.createElement('div');
            $cartSum.classList.add('cart_sum');
            cartSum += item[i].price;
            $cartSum.textContent = ' Итоговая сумма товаров в корзине ' + cartSum 
           
            var $quantitySum = document.createElement('div');
            $quantitySum.classList.add('quantitySum_sum');
            quantitySum += item[i].quantity;
            $quantitySum.textContent = ' Количество товаров в корзине ' + quantitySum
                                   
        }
        
       $cartCount.appendChild($cartSum); 
       $cartCount.appendChild($quantitySum); 
        
    } else {
        // корзина пуста
        $cart.innerHTML = '';
        
        var $div = document.createElement('div');
        $div.classList.add('empty');
        $div.textContent = 'Корзина пуста';
        $cart.appendChild($div);
    }
}



var cartList = [
 {
     product: 'hat',
     quantity: 5,
     price: 50
 },
     {
     product: 'jacket',
     quantity: 1,
     price: 100     
 },
     {
     product: 'jeans',
     quantity: 2,
     price: 150     
 }
]


getCart(cartList);

