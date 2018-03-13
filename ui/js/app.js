function login() {
    $.ajax({
        url: 'http://127.0.0.1:5000/login',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
            'username': $("#username").val(),
            'password': $("#password").val()
        }),
        type: "POST",
        dataType: "json",
        error: function (e){
        },
        success: function (resp) {
            if (resp.status === 'ok') {
                window.location.replace('about.html')
            }
            else {
                alert("Username and password doesn't match. Please Try Again.")
            }
        }
    });
}

// post //
function postmyad1() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/add_post',
			contentType: 'application/json; charset=utf-8',
			data: JSON.stringify({
				'book_name': $("#book_name").val(),
				'description': $("#description").val(),
				'price': $("#price").val(),
				'category': $("#category").val(),
				'photo': $("#photo").val(),
                'details': $("#details").val()
			}),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status === 'ok') {
                	alert("Successfully posted!");
                    window.location.replace('post_ad_ok.html')

                 }
				else {
					alert("There must be wrong. Please review your form.")
				}

			}
		});
}
function postmyprof() {
    $.ajax(
		{
			url: 'http://127.0.0.1:5000/post_profile/',
			contentType: 'application/json; charset=utf-8',
			data: JSON.stringify({
				'firstname': $("#firstname").val(),
				'lastname': $("#lastname").val(),
				'address': $("#address").val(),
				'mobile': $("#mobile").val(),
				'email': $("#email").val(),
                'weblink': $("#weblink").val()
			}),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status === 'ok') {
                	alert("Successfully Posted!");

                 }
				else {
					alert("There must be wrong. Please review your form.")
				}

			}
		});
}

// edits //
function editmyad1() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/editmyad1',
			contentType: 'application/json; charset=utf-8',
			data: JSON.stringify({
                'book_name': $("#book_name").val(),
				'description': $("#description").val(),
				'price': $("#price").val(),
				'category': $("#category").val(),
				'photo': $("#photo").val(),
                'details': $("#details").val()
			}),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status === 'ok') {
                	alert("Successfully Edited!")
                    window.location.replace('home.html')
                 }
				else {
					alert("There must be wrong. Please review your form.")
				}
			}
		});
}

function editmyad2() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/editmyad2',
			contentType: 'application/json; charset=utf-8',
			data: JSON.stringify({
				'book_name': $("#book_name").val(),
				'description': $("#description").val(),
				'price': $("#price").val(),
				'category': $("#category").val(),
				'photo': $("#photo").val(),
                'details': $("#details").val()
				}),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status === 'ok') {
                	alert("Successfully updated!")
                    window.location.replace('post_ad_ok.html')
                 }
				else {
					alert("ERROR")
				}
			}
		});
}
function editmyad3() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/editmyad3',
			contentType: 'application/json; charset=utf-8',
			data: JSON.stringify({
				'book_name': $("#book_name").val(),
				'description': $("#description").val(),
				'price': $("#price").val(),
				'category': $("#category").val(),
				'photo': $("#photo").val(),
                'details': $("#details").val()
				}),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status === 'ok') {
                	alert("Successfully updated!")
                    window.location.replace('post_ad_ok.html')
                 }
				else {
					alert("ERROR")
				}
			}
		});
}
function editmyad4() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/editmyad4',
			contentType: 'application/json; charset=utf-8',
			data: JSON.stringify({
				'book_name': $("#book_name").val(),
				'description': $("#description").val(),
				'price': $("#price").val(),
				'category': $("#category").val(),
				'photo': $("#photo").val(),
                'details': $("#details").val()
				}),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status === 'ok') {
                	alert("Successfully updated!")
                    window.location.replace('post_ad_ok.html')
                 }
				else {
					alert("ERROR")
				}
			}
		});
}
function editmyad5() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/editmyad5',
			contentType: 'application/json; charset=utf-8',
			data: JSON.stringify({
				'book_name': $("#book_name").val(),
				'description': $("#description").val(),
				'price': $("#price").val(),
				'category': $("#category").val(),
				'photo': $("#photo").val(),
                'details': $("#details").val()
				}),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status === 'ok') {
                	alert("Successfully updated!")
                    window.location.replace('post_ad_ok.html')
                 }
				else {
					alert("ERROR")
				}
			}
		});
}
function editmyad6() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/editmyad6',
			contentType: 'application/json; charset=utf-8',
			data: JSON.stringify({
				'book_name': $("#book_name").val(),
				'description': $("#description").val(),
				'price': $("#price").val(),
				'category': $("#category").val(),
				'photo': $("#photo").val(),
                'details': $("#details").val()
				}),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status === 'ok') {
                	alert("Successfully updated!")
                    window.location.replace('post_ad_ok.html')
                 }
				else {
					alert("ERROR")
				}
			}
		});
}
function editmyad7() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/editmyad7',
			contentType: 'application/json; charset=utf-8',
			data: JSON.stringify({
				'book_name': $("#book_name").val(),
				'description': $("#description").val(),
				'price': $("#price").val(),
				'category': $("#category").val(),
				'photo': $("#photo").val(),
                'details': $("#details").val()
				}),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status === 'ok') {
                	alert("Successfully updated!")
                    window.location.replace('post_ad_ok.html')
                 }
				else {
					alert("ERROR")
				}
			}
		});
}
function editmyad8() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/editmyad8',
			contentType: 'application/json; charset=utf-8',
			data: JSON.stringify({
				'book_name': $("#book_name").val(),
				'description': $("#description").val(),
				'price': $("#price").val(),
				'category': $("#category").val(),
				'photo': $("#photo").val(),
                'details': $("#details").val()
				}),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status === 'ok') {
                	alert("Successfully updated!")
                    window.location.replace('post_ad_ok.html')
                 }
				else {
					alert("ERROR")
				}
			}
		});
}
function editmyad9() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/editmyad9',
			contentType: 'application/json; charset=utf-8',
			data: JSON.stringify({
				'book_name': $("#book_name").val(),
				'description': $("#description").val(),
				'price': $("#price").val(),
				'category': $("#category").val(),
				'photo': $("#photo").val(),
                'details': $("#details").val()
				}),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status === 'ok') {
                	alert("Successfully updated!")
                    window.location.replace('post_ad_ok.html')
                 }
				else {
					alert("ERROR")
				}
			}
		});
}
function editmyad10() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/editmyad10',
			contentType: 'application/json; charset=utf-8',
			data: JSON.stringify({
				'book_name': $("#book_name").val(),
				'description': $("#description").val(),
				'price': $("#price").val(),
				'category': $("#category").val(),
				'photo': $("#photo").val(),
                'details': $("#details").val()
				}),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status === 'ok') {
                	alert("Successfully updated!")
                    window.location.replace('post_ad_ok.html')
                 }
				else {
					alert("ERROR")
				}
			}
		});
}


// displays //
function displayme() 	{

    $("#showme").show();

    $.ajax({
        url: 'http://127.0.0.1:5000/displayme/',
        type: "GET",
        dataType: "json",
        success: function (resp) {

            if (resp.status === 'ok') {
                for (i = 0; i < resp.count; i++) {
                    book_name = resp.entries[i].book_name;
                    description = resp.entries[i].description;
                    price = resp.entries[i].price;
                    category = resp.entries[i].category;
                    photo = resp.entries[i].photo;
                    details = resp.entries[i].details;
                    $("#showme").append(showme(book_name, description, price, category, photo, details));
                }
            } else {
                $("#showme").html("");
                alert(resp.message);
            }
        }
    });
} // sa home ni xa
function display_all() {
    $("#showme_all").show();

    $.ajax({
        url: 'http://127.0.0.1:5000/display_all/',
        type: "GET",
        dataType: "json",
        success: function (resp) {

            if (resp.status === 'ok') {
                for (i = 0; i < resp.count; i++) {
                    book_name = resp.entries[i].book_name;
                    description = resp.entries[i].description;
                    price = resp.entries[i].price;
                    category = resp.entries[i].category;
                    photo = resp.entries[i].photo;
                    details = resp.entries[i].details;
                    $("#showme_all").append(showme_all(book_name, description, price, category, photo, details));
                }
            } else {
                $("#showme_all").html("");
                alert(resp.message);
            }
        }
    });
} // sa book inventory
function display_fic() {

    $("#showme_fic").show();

    $.ajax({
        url: 'http://127.0.0.1:5000/display_fic/',
        type: "GET",
        dataType: "json",
        success: function (resp) {

            if (resp.status === 'ok') {
                for (i = 0; i < resp.count; i++) {
                    book_name = resp.entries[i].book_name;
                    description = resp.entries[i].description;
                    price = resp.entries[i].price;
                    category = resp.entries[i].category;
                    photo = resp.entries[i].photo;
                    details = resp.entries[i].details;
                    $("#showme_fic").append(showme_fic(book_name, description, price, category, photo, details));
                }
            } else {
                $("#showme_fic").html("");
                alert(resp.message);
            }
        }
    });
}
function display_nonfic() {

    $("#showme_nonfic").show();

    $.ajax({
        url: 'http://127.0.0.1:5000/display_nonfic/',
        type: "GET",
        dataType: "json",
        success: function (resp) {

            if (resp.status === 'ok') {
                for (i = 0; i < resp.count; i++) {
                    book_name = resp.entries[i].book_name;
                    description = resp.entries[i].description;
                    price = resp.entries[i].price;
                    category = resp.entries[i].category;
                    photo = resp.entries[i].photo;
                    details = resp.entries[i].details;
                    $("#showme_nonfic").append(showme_nonfic(book_name, description, price, category, photo, details));
                }
            } else {
                $("#showme_nonfic").html("");
                alert(resp.message);
            }
        }
    });
}
function display_acads() {

    $("#showme_acads").show();

    $.ajax({
        url: 'http://127.0.0.1:5000/display_acads/',
        type: "GET",
        dataType: "json",
        success: function (resp) {

            if (resp.status === 'ok') {
                for (i = 0; i < resp.count; i++) {
                    book_name = resp.entries[i].book_name;
                    description = resp.entries[i].description;
                    price = resp.entries[i].price;
                    category = resp.entries[i].category;
                    photo = resp.entries[i].photo;
                    details = resp.entries[i].details;
                    $("#showme_acads").append(showme_acads(book_name, description, price, category, photo, details));
                }
            } else {
                $("#showme_acads").html("");
                alert(resp.message);
            }
        }
    });
}
function display_prof() {
    $("#showme_prof").show();

    $.ajax({
        url: 'http://127.0.0.1:5000/display_prof/',
        type: "GET",
        dataType: "json",
        success: function (resp) {

            if (resp.status === 'ok') {
                for (i = 0; i < resp.count; i++) {
                    firstname = resp.entries[i].firstname;
                    lastname = resp.entries[i].lastname;
                    address = resp.entries[i].address;
                    mobile = resp.entries[i].mobile;
                    email = resp.entries[i].email;
                    weblink = resp.entries[i].weblink;
                    $("#showme_prof").append(showme_prof(firstname, lastname, address, mobile, email, weblink));
                }
            } else {
                $("#showme_prof").html("");
                alert(resp.message);
            }
        }
    });
}
function display_wish() {

    $("#showme_wish").show();

    $.ajax({
        url: 'http://127.0.0.1:5000/display_wish/',
        type: "GET",
        dataType: "json",
        success: function (resp) {

            if (resp.status === 'ok') {
                for (i = 0; i < resp.count; i++) {
                    book_name = resp.entries[i].book_name;
                    description = resp.entries[i].description;
                    price = resp.entries[i].price;
                    category = resp.entries[i].category;
                    photo = resp.entries[i].photo;
                    details = resp.entries[i].details;
                    $("#showme_wish").append(showme_wish(book_name, description, price, category, photo, details));
                }
            } else {
                $("#showme_wish").html("");
                alert(resp.message);
            }
        }
    });
}

function displaymodal_one() {
    $("#showmodal_one").show();

    $.ajax({
        url: 'http://127.0.0.1:5000/displaymodal_one/',
        type: "GET",
        dataType: "json",
        success: function (resp) {

            if (resp.status === 'ok') {
                for (i = 0; i < resp.count; i++) {
                    book_name = resp.entries[i].book_name;
                    price = resp.entries[i].price;
                    $("#squarespaceModal").append(showmodal_one(book_name, price));
                }
            } else {
                $("#squarespaceModal").html("");
                alert(resp.message);
            }
        }
    });
}

// shows //
function showme(book_name, description, price, category, photo, details)	{
    return '<div class="table-wrapper">' +
        '<table class="alt" id="tablenisya">' +
        '<td>' + book_name + '</td>' +
        '<td>' + description + '</td>' +
        '<td>'  + price + ' Php' + '</td>' +
        '<td>' + category + '</td>' +
        '<td>' + photo + '</td>' +
        '<td>' + details + '</td>' +
        '<td><a href="editmyad1.html" class="button small">Edit</a><a href="del_yn.html" class="button small">Remove</a>' +
		'</td>' +
        '</div>' +
        '</table>'

} // sa home ni seya
function showme_all(book_name,description, price, category, photo, details){
    return '<div class="table-wrapper">' +
        '<table class="alt" id="tablenisya">' +
        '<td>' + book_name + '</td>' +
        '<td>' + description + '</td>' +
        '<td>' + price + ' Php ' +   '</td>' +
        '<td>' + category + '</td>' +
        '<td>' + photo + '</td>' +
        '<td>' + details + '</td>' +
		"<td><a class='button small' class='wish' onclick='wishlist1();'>Add to Wishlist</a><a data-toggle='modal' onclick='squarespaceModal' class='button small'>Rent Now</a></td>" +
        '</div>' +
        '</table>'
}
function showme_fic(book_name, description, price, category, photo, details){
     return '<div class="table-wrapper">' +
        '<table class="alt" id="tablenisya">' +
        '<td>' + book_name + '</td>' +
        '<td>' + description + '</td>' +
        '<td>' + price + ' Php ' +   '</td>' +
        '<td>' + category + '</td>' +
        '<td>' + photo + '</td>' +
        '<td>' + details + '</td>' +
		"<td><a class='button small' class='wish' onclick='wishlist1();'>Add to Wishlist</a><a data-toggle='modal' data-target='#squarespaceModal' class='button small'>Rent Now</a></td>" +
        '</div>' +
        '</table>'
}
function showme_nonfic(book_name, description, price, category, photo, details){
      return '<div class="table-wrapper">' +
        '<table class="alt" id="tablenisya">' +
        '<td>' + book_name + '</td>' +
        '<td>' + description + '</td>' +
        '<td>' + price + ' Php' +   '</td>' +
        '<td>' + category + '</td>' +
        '<td>' + photo + '</td>' +
        '<td>' + details + '</td>' +
		"<td><a class='button small' class='wish' onclick='wishlist1();'>Add to Wishlist</a><a data-toggle='modal' data-target='#squarespaceModal' class='button small'>Rent Now</a></td>" +
        '</div>' +
        '</table>'
}
function showme_acads(book_name, description, price, category, photo, details) {
     return '<div class="table-wrapper">' +
        '<table class="alt" id="tablenisya">' +
        '<td>' + book_name + '</td>' +
        '<td>' + description + '</td>' +
        '<td>' + price + ' Php' +   '</td>' +
        '<td>' + category + '</td>' +
        '<td>' + photo + '</td>' +
        '<td>' + details + '</td>' +
		"<td><a class='button small' class='wish' onclick='wishlist1();'>Add to Wishlist</a><a data-toggle='modal' data-target='#squarespaceModal' class='button small'>Rent Now</a></td>" +
        '</div>' +
        '</table>'
}
function showme_prof(firstname, lastname, address, mobile, email, weblink) {
    return '<div class="table-wrapper">' +
        '<table class="alt" id="tablenisya">' +
        '<thead>' +
        '<tr>' +
        '<h6>First Name:</h6>' +
        '<tr>' + firstname + '</tr>' +
        '<h6>Last Name:</h6>' +
        '<tr>' + lastname + '</tr>' +
        '<h6>Address:</h6>' +
        '<tr>' + address + '</tr>' +
        '<h6>Contact Number:</h6>' +
        '<tr>' + mobile + '</tr>' +
        '<h6>Email:</h6>' +
        '<tr>' + email + '</tr>' +
        '<h6>Social Media Sites:</h6>' +
        '<tr>' + weblink + '</tr>'  +
        '</tr>' +
        '</thead>' +
        '</table>' +
        '</div>'
}
function showme_wish(book_name, description, price, category, photo, details) {
      return '<div class="table-wrapper">' +
        '<table class="alt" id="tablenisya">' +
        '<td>' + book_name + '</td>' +
        '<td>' + description + '</td>' +
        '<td>' + price + ' Php ' +   '</td>' +
        '<td>' + category + '</td>' +
        '<td>' + photo + '</td>' +
        '<td>' + details + '</td>' +
		"<td><a data-toggle='modal' data-target='#squarespaceModal' class='button small'>Rent Now</a><a class='button small' class='wish' onclick=delete_wish()>Delete</a></td>" +
        '</div>' +
        '</table>'
}
function showmodal_one(book_name, price) {
    return '<div class="modal fade" id="squarespaceModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">' +
	'<div class="modal-dialog">' +
		'<div class="modal-content">' +
			 '<div class="modal-header">' +
				'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>' +
				'<h3 class="modal-title" id="lineModalLabel">Confrim Rental</h3>' +
				'</div>' +
				'<div class="modal-body">' +
							'<p>You are about to rent: </p>' +
							book_name +
							'<p> for </p>' + price +
							'<p> per week. </p>'
							+ '<h6>Do you want to rent it?</h6>' +
				'</div>' +
	      '<div class="modal-footer">' +
                    '<div class="btn-group btn-group-justified" role="group" aria-label="group button">' +
                        '<div class="btn-group" role="group">' +
                            '<button type="button" class="btn btn-default" data-dismiss="modal"  role="button">Cancel</button>' +
                        '</div>' +
                        '<div class="btn-group" role="group">' +
                            '<button type="button" id="saveImage" class="btn btn-default btn-hover-green" data-action="save" role="button">Rent Now</button>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>'
}
















// wishlist //
function wishlist1() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/wishlist1',
			contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({
                 'wish': $("#wish").val()
             }),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status === 'ok') {
                	alert("Successfully added to wishlist!")
                 }
				else {
					alert("ERROR")
				}

			}
		});
}

// delete //
function delete_all() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/delete_all',
			contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({
                 'del': $("#del").val()
             }),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status === 'ok') {
                	alert("Deleted!")
					window.location.replace('home.html')

                 }
				else {
					alert("ERROR")
				}

			}
		});
}
function delete_wish() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/delete_wish',
			contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({
                 'del': $("#del").val()
             }),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status === 'ok') {
                	alert("Deleted!")
					window.location.replace('mywish.html')
                 }
				else {
					alert("ERROR")
				}

			}
		});
}
function delete1() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/delete1',
			contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({
                 'del': $("#del").val()
             }),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status === 'ok') {
                	alert("Deleted!")
					window.location.replace('home.html')

                 }
				else {
					alert("ERROR")
				}

			}
		});
}
function delete2() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/delete1',
			contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({
                 'del': $("#del").val()
             }),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status == 'ok') {
                	alert("Deleted!")


                 }
				else {
					alert("ERROR")
				}

			}
		});
}
function delete3() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/delete1',
			contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({
                 'del': $("#del").val()
             }),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status == 'ok') {
                	alert("Deleted!")


                 }
				else {
					alert("ERROR")
				}

			}
		});
}
function delete4() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/delete1',
			contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({
                 'del': $("#del").val()
             }),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status == 'ok') {
                	alert("Deleted!")


                 }
				else {
					alert("ERROR")
				}

			}
		});
}
function delete5() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/delete1',
			contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({
                 'del': $("#del").val()
             }),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status == 'ok') {
                	alert("Deleted!")


                 }
				else {
					alert("ERROR")
				}

			}
		});
}
function delete6() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/delete1',
			contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({
                 'del': $("#del").val()
             }),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status == 'ok') {
                	alert("Deleted!")


                 }
				else {
					alert("ERROR")
				}

			}
		});
}
function delete7() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/delete1',
			contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({
                 'del': $("#del").val()
             }),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status == 'ok') {
                	alert("Deleted!")


                 }
				else {
					alert("ERROR")
				}

			}
		});
}
function delete8() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/delete1',
			contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({
                 'del': $("#del").val()
             }),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status == 'ok') {
                	alert("Deleted!")


                 }
				else {
					alert("ERROR")
				}

			}
		});
}
function delete9() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/delete1',
			contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({
                 'del': $("#del").val()
             }),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status == 'ok') {
                	alert("Deleted!")


                 }
				else {
					alert("ERROR")
				}

			}
		});
}
function delete10() {
	$.ajax(
		{
			url: 'http://127.0.0.1:5000/delete1',
			contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({
                 'del': $("#del").val()
             }),
			type: "POST",
			dataType: "json",
			error: function (e) {
			},
			success: function (resp) {
                if (resp.status == 'ok') {
                	alert("Deleted!")


                 }
				else {
					alert("ERROR")
				}

			}
		});
}
