reate function postmyad(book_name1 text, book_description1 text, price1 integer, category1 text, upload_photo1 text, details1 text) returns text
LANGUAGE plpgsql
AS $$
DECLARE
    loc_res text;

    loc_name text;
    loc_desc text;
    loc_price int;
    loc_category text;
    loc_details text;

  BEGIN
    SELECT into loc_name book_name1, loc_desc description, loc_price price, loc_category category, loc_details details from books;
    if book_name1 NOTNULL THEN
      INSERT INTO books(book_name, description, price, category, photo, details)
      VALUES (book_name1, book_description1, price1, category1, upload_photo1, details1);
    loc_res = 'ok';
      end if;
    return loc_res;
  end;

$$;
