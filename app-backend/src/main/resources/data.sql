
insert into categories(category_id, name) values ('09bcaf7d-99e1-4448-bdcb-a5eb5d5df0b4', 'Biografija');
insert into categories(category_id, name) values ('dc26f7c3-6d26-48a4-b73d-4880c3cc9d78', 'Drama');
insert into categories(category_id, name) values ('03779195-a803-4fbe-ba60-38aff19828e5', 'Horor');
insert into categories(category_id, name) values ('15bab8d1-2889-4e6a-b9ef-4b97b356fe5e', 'E-knjige');
insert into categories(category_id, name) values ('54a8b1f0-99bb-4f29-8b09-63b4a37e35a6', 'Racunari i programiranje ');
insert into categories(category_id, name) values ('d28ee796-b5e7-4734-a3e7-1ee3246b477b', 'Internet svijet');
insert into categories(category_id, name) values ('88ba265a-f277-4827-9e2d-32633473f099', 'Popularna nauka');


insert into languages(language_id, name) values ('ba3a5032-e5f1-43f2-82a6-ef0a892f170a', 'Srpski');
insert into languages(language_id, name) values ('d5b9ec3c-99e8-4d97-84d9-3a3ef0b18354', 'Engleski');
insert into languages(language_id, name) values ('86a77937-5e64-4543-9222-c1eabf91b1e1', 'Hrvatski');
insert into languages(language_id, name) values ('14db1467-24b3-4ef5-9d19-77de725e7193', 'Spanski');


insert into books(book_id, title, isbn, price, language_id) values ('2d3e1642-2714-48cb-8f1a-8b10abaf0651', 'Semper idem', '978-86-521-2315-5', 10.5, 'ba3a5032-e5f1-43f2-82a6-ef0a892f170a');
insert into books(book_id, title, isbn, price, language_id) values ('5b7f6e56-d309-45ee-8db7-7c799c43f7ab', 'U poteri za svetlom', '978-86-521-4098-5', 15, 'ba3a5032-e5f1-43f2-82a6-ef0a892f170a');
insert into books(book_id, title, isbn, price, language_id) values ('4b453706-6706-4959-ad76-2be916f7611b', 'Ordesa', '978-86-521-4092-3', 12, 'ba3a5032-e5f1-43f2-82a6-ef0a892f170a');
insert into books(book_id, title, isbn, price, language_id) values ('f986870f-bf90-4226-a0ce-d8ca71e11fa2', 'Komplet – Digitalna revolucija ', null, 22, 'd5b9ec3c-99e8-4d97-84d9-3a3ef0b18354');
--insert into books(book_id, title, isbn, price) values ('049ee604-cf33-4f86-b4db-2ce038eced19', '', '', 30);
--insert into books(book_id, title, isbn, price) values ('049ee604-cf33-4f86-b4db-2ce038eced19', '', '', 30);
--insert into books(book_id, title, isbn, price) values ('049ee604-cf33-4f86-b4db-2ce038eced19', '', '', 30);

insert into books_categories (book_id, category_id) values  ('2d3e1642-2714-48cb-8f1a-8b10abaf0651', '09bcaf7d-99e1-4448-bdcb-a5eb5d5df0b4');
insert into books_categories (book_id, category_id) values  ('2d3e1642-2714-48cb-8f1a-8b10abaf0651', '15bab8d1-2889-4e6a-b9ef-4b97b356fe5e');
insert into books_categories (book_id, category_id) values  ('f986870f-bf90-4226-a0ce-d8ca71e11fa2', '54a8b1f0-99bb-4f29-8b09-63b4a37e35a6');
insert into books_categories (book_id, category_id) values  ('f986870f-bf90-4226-a0ce-d8ca71e11fa2', 'd28ee796-b5e7-4734-a3e7-1ee3246b477b');
insert into books_categories (book_id, category_id) values  ('f986870f-bf90-4226-a0ce-d8ca71e11fa2', '88ba265a-f277-4827-9e2d-32633473f099');


insert into authors (author_id, first_name, last_name, date_of_birth, date_of_death) values ('114aa1cc-fbdd-476b-9667-c0c5553cbf0f', 'Marko', 'Vidojković', '1975-10-11', null);
insert into authors (author_id, first_name, last_name, date_of_birth, date_of_death) values ('b20fbdcd-4bae-455e-a564-1400507ed8bc', 'Kristof', 'Keze', '1964-01-01', null);
insert into authors (author_id, first_name, last_name, date_of_birth, date_of_death) values ('f2d4c1be-3ef6-4f4f-9fe8-e1b6df661502', 'Džejmi', 'Bartlet', '1971-10-13', null);
--insert into author (author_id, first_name, last_name, date_of_birth, date_of_death) values ('a227f976-fdd0-4d10-a26e-cfbc0319aea9', '', '', '', '');

insert into books_by_authors(book_id, author_id) values ('f986870f-bf90-4226-a0ce-d8ca71e11fa2', 'b20fbdcd-4bae-455e-a564-1400507ed8bc');
insert into books_by_authors(book_id, author_id) values ('f986870f-bf90-4226-a0ce-d8ca71e11fa2', 'f2d4c1be-3ef6-4f4f-9fe8-e1b6df661502');