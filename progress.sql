CREATE OR REPLACE FUNCTION login(IN par_username TEXT, IN par_password TEXT) RETURNS TEXT AS
$$
DECLARE
	loc_username TEXT;
	loc_password TEXT;
	loc_res      TEXT;
BEGIN
			SELECT INTO loc_username "username", loc_password "password" FROM account WHERE username = par_username AND password = par_password;
				IF loc_username ISNULL AND loc_password ISNULL THEN
				ELSE
									loc_res = 'Error';
									loc_res = 'ok';
				END IF;
				RETURN loc_res;
END;

$$
LANGUAGE 'plpgsql' VOLATILE;

create or replace function postmyad1( in bk_nm text,  in bk_desc text, in bk_price int, in bk_cat text, in bk_photo text, bk_det text) returns text as
$$
  declare
    loc_res text;

    loc_bknm text;
    loc_bkdesc text;
    loc_bkpr text;
    loc_bkcat text;
    loc_bkph text;
    loc_bkdet text;
  begin
    select into loc_bknm book_name, loc_bkdesc description, loc_bkpr price, loc_bkcat category, loc_bkph photo, loc_bkdet details from books;
     if bk_nm NOTNULL then

       insert into books (book_name, description, price, category, photo, details) values (bk_nm,bk_desc,bk_price,bk_cat,bk_photo,bk_det);
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';

create or replace function postmyprof( in p_fname text, in p_lname text, in p_add text, in p_mobile integer, in p_email text, p_web text) returns text as
$$
  declare
    loc_res text;

    loc_fname text;
    loc_lname int;
    loc_add text;
    loc_mobile int;
    loc_email text;
    loc_web text;
  begin
    select into loc_fname firstname, loc_lname lastname, loc_add address, loc_mobile mobile, loc_email email, loc_web weblink from profile;
     if p_fname NOTNULL then

       insert into profile(firstname, lastname, address, mobile, email, weblink) values (p_fname,p_lname,p_add,p_mobile,p_email,p_web);
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';



INSERT INTO books(book_name, description, price, category, photo, details) values ('sad','happy',12,'Fiction', null, 'sad');
delete from books;
ALTER SEQUENCE books1_book_id_seq RESTART with 1;


create or replace function editmyad1( in ebk_nm text,  in ebk_desc text, in ebk_price int, in ebk_cat text, in ebk_photo text, ebk_det text) returns text as
$$
  declare
    loc_res text;

    loc_ebknm text;
    loc_ebkdesc text;
    loc_ebkpr int;
    loc_ebkcat text;
    loc_ebkph text;
    loc_ebkdet text;
  begin
     select into loc_ebknm book_name, loc_ebkdesc decsription, loc_ebkpr price, loc_ebkcat category, loc_ebkph photo, loc_ebkdet details from books;
     if loc_ebknm NOTNULL then

       UPDATE books set book_name = ebk_nm,  description = ebk_desc, price = ebk_price, category = ebk_cat, photo = ebk_photo, details = ebk_det where book_id = 1;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';


create or replace function editmyad2( in ebk_nm text,  in ebk_desc text, in ebk_price int, in ebk_cat text, in ebk_photo text, ebk_det text) returns text as
$$
  declare
    loc_res text;

    loc_ebknm text;
    loc_ebkdesc text;
    loc_ebkpr int;
    loc_ebkcat text;
    loc_ebkph text;
    loc_ebkdet text;
  begin
     select into loc_ebknm book_name, loc_ebkdesc decsription, loc_ebkpr price, loc_ebkcat category, loc_ebkph photo, loc_ebkdet details from books;
     if loc_ebknm NOTNULL then

       UPDATE books set book_name = ebk_nm,  description = ebk_desc, price = ebk_price, category = ebk_cat, photo = ebk_photo, details = ebk_det where book_id = 2;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';
create or replace function editmyad3( in ebk_nm text,  in ebk_desc text, in ebk_price int, in ebk_cat text, in ebk_photo text, ebk_det text) returns text as
$$
  declare
    loc_res text;

    loc_ebknm text;
    loc_ebkdesc text;
    loc_ebkpr int;
    loc_ebkcat text;
    loc_ebkph text;
    loc_ebkdet text;
  begin
     select into loc_ebknm book_name, loc_ebkdesc decsription, loc_ebkpr price, loc_ebkcat category, loc_ebkph photo, loc_ebkdet details from books;
     if loc_ebknm NOTNULL then

       UPDATE books set book_name = ebk_nm,  description = ebk_desc, price = ebk_price, category = ebk_cat, photo = ebk_photo, details = ebk_det where book_id = 3;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';
create or replace function editmyad4( in ebk_nm text,  in ebk_desc text, in ebk_price int, in ebk_cat text, in ebk_photo text, ebk_det text) returns text as
$$
  declare
    loc_res text;

    loc_ebknm text;
    loc_ebkdesc text;
    loc_ebkpr int;
    loc_ebkcat text;
    loc_ebkph text;
    loc_ebkdet text;
  begin
     select into loc_ebknm book_name, loc_ebkdesc decsription, loc_ebkpr price, loc_ebkcat category, loc_ebkph photo, loc_ebkdet details from books;
     if loc_ebknm NOTNULL then

       UPDATE books set book_name = ebk_nm,  description = ebk_desc, price = ebk_price, category = ebk_cat, photo = ebk_photo, details = ebk_det where book_id = 4;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';
create or replace function editmyad5( in ebk_nm text,  in ebk_desc text, in ebk_price int, in ebk_cat text, in ebk_photo text, ebk_det text) returns text as
$$
  declare
    loc_res text;

    loc_ebknm text;
    loc_ebkdesc text;
    loc_ebkpr int;
    loc_ebkcat text;
    loc_ebkph text;
    loc_ebkdet text;
  begin
     select into loc_ebknm book_name, loc_ebkdesc decsription, loc_ebkpr price, loc_ebkcat category, loc_ebkph photo, loc_ebkdet details from books;
     if loc_ebknm NOTNULL then

       UPDATE books set book_name = ebk_nm,  description = ebk_desc, price = ebk_price, category = ebk_cat, photo = ebk_photo, details = ebk_det where book_id = 5;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';
create or replace function editmyad6( in ebk_nm text,  in ebk_desc text, in ebk_price int, in ebk_cat text, in ebk_photo text, ebk_det text) returns text as
$$
  declare
    loc_res text;

    loc_ebknm text;
    loc_ebkdesc text;
    loc_ebkpr int;
    loc_ebkcat text;
    loc_ebkph text;
    loc_ebkdet text;
  begin
     select into loc_ebknm book_name, loc_ebkdesc decsription, loc_ebkpr price, loc_ebkcat category, loc_ebkph photo, loc_ebkdet details from books;
     if loc_ebknm NOTNULL then

       UPDATE books set book_name = ebk_nm,  description = ebk_desc, price = ebk_price, category = ebk_cat, photo = ebk_photo, details = ebk_det where book_id = 6;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';
create or replace function editmyad7( in ebk_nm text,  in ebk_desc text, in ebk_price int, in ebk_cat text, in ebk_photo text, ebk_det text) returns text as
$$
  declare
    loc_res text;

    loc_ebknm text;
    loc_ebkdesc text;
    loc_ebkpr int;
    loc_ebkcat text;
    loc_ebkph text;
    loc_ebkdet text;
  begin
     select into loc_ebknm book_name, loc_ebkdesc decsription, loc_ebkpr price, loc_ebkcat category, loc_ebkph photo, loc_ebkdet details from books;
     if loc_ebknm NOTNULL then

       UPDATE books set book_name = ebk_nm,  description = ebk_desc, price = ebk_price, category = ebk_cat, photo = ebk_photo, details = ebk_det where book_id = 7;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';
create or replace function editmyad8( in ebk_nm text,  in ebk_desc text, in ebk_price int, in ebk_cat text, in ebk_photo text, ebk_det text) returns text as
$$
  declare
    loc_res text;

    loc_ebknm text;
    loc_ebkdesc text;
    loc_ebkpr int;
    loc_ebkcat text;
    loc_ebkph text;
    loc_ebkdet text;
  begin
     select into loc_ebknm book_name, loc_ebkdesc decsription, loc_ebkpr price, loc_ebkcat category, loc_ebkph photo, loc_ebkdet details from books;
     if loc_ebknm NOTNULL then

       UPDATE books set book_name = ebk_nm,  description = ebk_desc, price = ebk_price, category = ebk_cat, photo = ebk_photo, details = ebk_det where book_id = 8;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';
create or replace function editmyad9( in ebk_nm text,  in ebk_desc text, in ebk_price int, in ebk_cat text, in ebk_photo text, ebk_det text) returns text as
$$
  declare
    loc_res text;

    loc_ebknm text;
    loc_ebkdesc text;
    loc_ebkpr int;
    loc_ebkcat text;
    loc_ebkph text;
    loc_ebkdet text;
  begin
     select into loc_ebknm book_name, loc_ebkdesc decsription, loc_ebkpr price, loc_ebkcat category, loc_ebkph photo, loc_ebkdet details from books;
     if loc_ebknm NOTNULL then

       UPDATE books set book_name = ebk_nm,  description = ebk_desc, price = ebk_price, category = ebk_cat, photo = ebk_photo, details = ebk_det where book_id = 9;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';
create or replace function editmyad10( in ebk_nm text,  in ebk_desc text, in ebk_price int, in ebk_cat text, in ebk_photo text, ebk_det text) returns text as
$$
  declare
    loc_res text;

    loc_ebknm text;
    loc_ebkdesc text;
    loc_ebkpr int;
    loc_ebkcat text;
    loc_ebkph text;
    loc_ebkdet text;
  begin
     select into loc_ebknm book_name, loc_ebkdesc decsription, loc_ebkpr price, loc_ebkcat category, loc_ebkph photo, loc_ebkdet details from books;
     if loc_ebknm NOTNULL then

       UPDATE books set book_name = ebk_nm,  description = ebk_desc, price = ebk_price, category = ebk_cat, photo = ebk_photo, details = ebk_det where book_id = 10;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';

create or replace function displayme(out text, out text, out INTEGER, out text, out text, out text) returns setof record as
$$
  select book_name, description, price, category, photo, details from books ORDER BY book_id;
$$
 language 'sql';
create or replace function display_all(out text, out text, out INTEGER, out text, out text, out text) returns setof record as
$$
  select book_name, description, price, category, photo, details from books ORDER BY book_id;
$$
 language 'sql';
create or replace function display_fic(out text, out text, out INTEGER,  out text, out text, out text) returns setof record as
$$
  select book_name, description, price, category, photo, details from books where category = 'Fiction';
$$
 language 'sql';
create or replace function display_nonfic(out text, out text, out INTEGER, out text, out text, out text) returns setof record as
$$
  select book_name, description, price, category, photo, details from books where category = 'Non-Fiction';
$$
 language 'sql';
create or replace function display_acads(out text, out text, out INTEGER, out text, out text, out text) returns setof record as
$$
  select book_name,  description, price, category, photo, details from books where category = 'Academics';
$$
 language 'sql';
create or replace function display_prof(out text, out text, out text, out integer, out text, out text) returns setof record as
$$
  select firstname, lastname, address, mobile, email, weblink from profile;
$$
 language 'sql';
create or replace function display_wish(out text, out text, out INTEGER, out text, out text, out text) returns setof record as
$$
  select book_name, description, price, category, photo, details from books where chosen = 'yes';
$$
 language 'sql';
create or replace function displaymodal_one(out text, out integer) returns setof record as
$$
  select book_name, price from books;

$$
 language 'sql';

create or replace function displaymodal_two(out text, out integer) returns setof record as
$$ --add book owner's profile? connect id naaaaaaaaaaaaaaaaaAAaaaaaah
  select mobile, email, weblink from profile;

$$
 language 'sql';


create or replace function wishlist1( in wish text) returns text as
$$
  declare
    loc_res text;

  begin
    if wish NOTNULL then

       UPDATE books set chosen = 'yes' where book_id = 1;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';


create or replace function delete_all( in del text) returns text as
$$
  declare
    loc_res text;

  begin
    if del NOTNULL then

      DELETE from books;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';

-- not really deleting tho. just setting the chose back to 'no'
create or replace function delete_wish(in del text) returns text as
$$
  declare
    loc_res text;

  begin
    if del NOTNULL then

      UPDATE books set chosen = 'no' where book_id = 1;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';

create or replace function delete1( in del text) returns text as
$$
  declare
    loc_res text;

  begin
    if del NOTNULL then


      DELETE from books where book_id = 1;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';
create or replace function delete2( in del text) returns text as
$$
  declare
    loc_res text;

  begin
    if del NOTNULL then

      DELETE from books where book_id =2;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';
create or replace function delete3( in del text) returns text as
$$
  declare
    loc_res text;

  begin
    if del NOTNULL then

      DELETE from books where book_id = 3;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';
create or replace function delete4( in del text) returns text as
$$
  declare
    loc_res text;

  begin
    if del NOTNULL then

      DELETE from books where book_id =4;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';
create or replace function delete5( in del text) returns text as
$$
  declare
    loc_res text;

  begin
    if del NOTNULL then

      DELETE from books where book_id = 5;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';
create or replace function delete6( in del text) returns text as
$$
  declare
    loc_res text;

  begin
    if del NOTNULL then

      DELETE from books where book_id = 6;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';
create or replace function delete7( in del text) returns text as
$$
  declare
    loc_res text;

  begin
    if del NOTNULL then

      DELETE from books where book_id = 7;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';
create or replace function delete8( in del text) returns text as
$$
  declare
    loc_res text;

  begin
    if del NOTNULL then

      DELETE from books where book_id = 8;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';
create or replace function delete9( in del text) returns text as
$$
  declare
    loc_res text;

  begin
    if del NOTNULL then

      DELETE from books where book_id =9;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';
create or replace function delete10( in del text) returns text as
$$
  declare
    loc_res text;

  begin
    if del NOTNULL then

      DELETE from books where book_id =10;
       loc_res = 'ok';

     else
       loc_res = 'Error';
     end if;
     return loc_res;
  end;
$$
 language 'plpgsql';
