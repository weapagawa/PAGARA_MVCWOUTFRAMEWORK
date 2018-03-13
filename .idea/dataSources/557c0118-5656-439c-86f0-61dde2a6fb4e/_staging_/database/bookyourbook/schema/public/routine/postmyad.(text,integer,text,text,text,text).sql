create function postmyad(book_name1 text, price1 integer, book_description1 text, category1 text, upload_photo1 text, details1 text) returns text
LANGUAGE plpgsql
AS $$
DECLARE
    loc_res text;

    loc_name text;
    loc_desc text;
    loc_price int;
    loc_category text;
    loc_photo text;
    loc_details text;

  BEGIN
    SELECT into loc_name book_name1, loc_price price, loc_desc description, loc_category category, loc_photo photo, loc_details details from books;
    if book_name1 NOTNULL THEN
      INSERT INTO books(book_name, price, description, category, photo, details)
      VALUES (book_name1, book_description1, price1, category1, upload_photo1, details1);
    loc_res = 'ok';
      end if;
    return loc_res;
  end;

$$;
