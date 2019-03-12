$(function(){


//Declare totals

	let $priceTotal = 0;
	let $taxTotal = $priceTotal*0.13;
	let $itemTotal= 0;
	let $finalTotal = $priceTotal + $taxTotal;
	let $discount = 0;

//Discount Calculator 


//Total Number of Items Calculator 

	function itemCount() {
			let $itemCount = $('.item_name').length;
			$('.total_items').html($itemCount);
	};



//Form Submit Function



	function calculate(){
		//calculate discounted price

		//calculate tax for item
		let $item = $('.item').val() || 'Item';
		$itemTotal = $itemTotal+$item;
		//calculate total for item
	}

	function formSubmit() {

		//Take form inputs and calculate discount and tax
		
		let $item = $('.item').val() || 'Item';
		let $price = parseInt($('.price').val()) || 0;
		let $discount = parseInt($('.discount').val())/100 || 0
		let $discountAmount = $price*$discount;
		let $discountedPrice = $price-($price*$discount);
		let $hst = ($discountedPrice*0.13);

		//Calculate totals
		$priceTotal = $price + $priceTotal;
		$taxTotal = $hst + $taxTotal;
		$itemTotal = $discountedPrice+$hst;
		$grandTotal=$itemTotal + $taxTotal;

		// Add row for item;
		$('.invoice_row').after(
				`<tr class="item_row">
					 <td class="item_remove"><i class="fas fa-minus-circle"></i></td>
				     <td class="item_name" scope="col">${$item}</td>
					 <td class="item_price" scope="col">$${$price}</td>
					 <td class="item_discount" scope="col">$${$discountAmount} <p class='percentage'>(%${$discount*100} OFF)</p></td>
					 <td class="item_tax" scope="col">$ ${($price*0.13)}</td>
					 <td class="item_total" scope="col">${$discountedPrice+($price*.13)}</td></tr>	`);		
		
		// Update Totals row
		$('.total_tax').html($taxTotal);
		$('.final_total').html($grandTotal);
		$('.total').html(`$${$grandTotal}`);
		$('.price_total').val($priceTotal);
		$("input[type='text']").val("");
		}	
	

//Form submit

	$('form').on('submit',function(e){

		e.preventDefault();

		//Take form inputs

		//Caculateinvoice totals for price,$hst, discount and item count

		formSubmit();
		itemCount();


});

});

