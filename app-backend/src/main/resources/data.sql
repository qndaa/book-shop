
insert into roles(role_id, name) values ('cb190efc-3c4b-45fc-8307-82039415b61d', 'ROLE_CUSTOMER');
insert into roles(role_id, name) values ('1358136f-d0aa-4361-90c0-b7e38a664bdc', 'ROLE_ADMINISTRATOR');





insert into languages(language_id, name) values ('ba3a5032-e5f1-43f2-82a6-ef0a892f170a', 'Srpski');
insert into languages(language_id, name) values ('d5b9ec3c-99e8-4d97-84d9-3a3ef0b18354', 'Engleski');
insert into languages(language_id, name) values ('86a77937-5e64-4543-9222-c1eabf91b1e1', 'Hrvatski');
insert into languages(language_id, name) values ('14db1467-24b3-4ef5-9d19-77de725e7193', 'Spanski');


insert into books(book_id, title, isbn, price, language_id, quantity, image) values (
                                                                                     '2d3e1642-2714-48cb-8f1a-8b10abaf0651',
                                                                                     'Semper idem', '978-86-521-2315-5',
                                                                                     10.5, 'ba3a5032-e5f1-43f2-82a6-ef0a892f170a',
                                                                                     10,
                                                                                     '3c0a3d7b-31dd-479a-9adc-f4a7c0b483a5.jpg');
insert into books(book_id, title, isbn, price, language_id, quantity, image) values ('5b7f6e56-d309-45ee-8db7-7c799c43f7ab', 'U poteri za svetlom', '978-86-521-4098-5', 15, 'ba3a5032-e5f1-43f2-82a6-ef0a892f170a', 10, '9e2f8d43-6841-4be8-9ed8-a2dca5f19e4f.jpg');
insert into books(book_id, title, isbn, price, language_id, quantity, image) values ('4b453706-6706-4959-ad76-2be916f7611b', 'Ordesa', '978-86-521-4092-3', 12, 'ba3a5032-e5f1-43f2-82a6-ef0a892f170a', 10, '411e6eef-a463-4a8a-847a-528cc1935e31.jpg');
insert into books(book_id, title, isbn, price, language_id, quantity, image) values ('f986870f-bf90-4226-a0ce-d8ca71e11fa2', 'Komplet – Digitalna revolucija ', null, 22, 'd5b9ec3c-99e8-4d97-84d9-3a3ef0b18354', 10, 'faa24a29-f195-491a-8583-37ae6844576a.jpg');
insert into books(book_id, title, isbn, price, language_id, quantity, image) values ('94f630c5-9fcd-46b9-b19f-d2bafb0ad9d9', 'Diva: Marija Kalas', '978-86-521-4066-4', 20, 'ba3a5032-e5f1-43f2-82a6-ef0a892f170a', 5, 'bbbac20a-7bee-4a21-9e59-bc08567ebbf2.jpg');
insert into books(book_id, title, isbn, price, language_id, quantity, image) values ('9c40e032-1200-43a5-a9a6-8db53ff2af85', 'Lanjski snegovi', '978-86-521-4206-4', 20, 'ba3a5032-e5f1-43f2-82a6-ef0a892f170a', 10, 'ed8e792b-1315-4619-bcea-f29d4a0d7f19.jpg');
insert into books(book_id, title, isbn, price, language_id, quantity, image) values ('17dcca1b-3f4d-4eba-9e7e-e0926d599035', 'Život pre čoveka', '978-86-521-4185-2', 25, 'ba3a5032-e5f1-43f2-82a6-ef0a892f170a', 10, 'c81227de-be7e-4232-8bfe-3d784f53c98b.jpg');
insert into books(book_id, title, isbn, price, language_id, quantity, image) values ('84b15913-6024-4e68-b1c4-23bc37bca229', 'Sarajka u Beogradu i druge drame', '978-86-521-3985-9', 25, 'ba3a5032-e5f1-43f2-82a6-ef0a892f170a', 10, '8690cae3-f23d-43b5-8e2d-96c0ac34382c.jpg');
insert into books(book_id, title, isbn, price, language_id, quantity, image) values ('f95e4e7e-fc2d-4273-ba90-a77a4cb092a0', 'Njegova devojka zauvek', '978-86-521-4248-4', 10, 'ba3a5032-e5f1-43f2-82a6-ef0a892f170a' , 15, '04505bc7-668c-45cd-8d69-60124cec4c1a.jpg');
insert into books(book_id, title, isbn, price, language_id, quantity, image) values ('1d3612be-5378-4415-a82b-db81660638e7', 'Una', '978-86-521-4017-6', 29, 'ba3a5032-e5f1-43f2-82a6-ef0a892f170a' , 15, 'b0429c6c-3b30-407b-a667-65b26614c1ae.jpg');
insert into books(book_id, title, isbn, price, language_id, quantity, image) values ('1c7dce3b-f00b-4d8d-86af-8042843e1c70', 'Ada', '978-86-521-3940-8', 20, 'ba3a5032-e5f1-43f2-82a6-ef0a892f170a' , 20, '76aa549a-732b-4643-8777-90607c269741.jpg');
insert into books(book_id, title, isbn, price, language_id, quantity, image) values ('5b93b744-9c25-441f-8dca-15564bb3e0ec', 'Gospođica Koko i miris ljubavi', '978-86-521-3312-3', 12, 'ba3a5032-e5f1-43f2-82a6-ef0a892f170a' , 20, '5e61f023-43c7-4129-8de2-72f5e67658c9.jpg');

insert into categories(category_id, name) values ('09bcaf7d-99e1-4448-bdcb-a5eb5d5df0b4', 'Biografija');
insert into categories(category_id, name) values ('dc26f7c3-6d26-48a4-b73d-4880c3cc9d78', 'Drama');
insert into categories(category_id, name) values ('03779195-a803-4fbe-ba60-38aff19828e5', 'Horor');
insert into categories(category_id, name) values ('15bab8d1-2889-4e6a-b9ef-4b97b356fe5e', 'E-knjige');
insert into categories(category_id, name) values ('54a8b1f0-99bb-4f29-8b09-63b4a37e35a6', 'Racunari i programiranje ');
insert into categories(category_id, name) values ('d28ee796-b5e7-4734-a3e7-1ee3246b477b', 'Internet svijet');
insert into categories(category_id, name) values ('88ba265a-f277-4827-9e2d-32633473f099', 'Popularna nauka');
insert into categories(category_id, name) values ('5351e599-ca61-4e55-b78b-cc80a9a9b2e6', 'Ljubavni');
insert into categories(category_id, name) values ('72f7ad84-7863-4f0a-ad49-9534ef6ea0df', 'Price');


insert into books_categories (book_id, category_id) values  ('2d3e1642-2714-48cb-8f1a-8b10abaf0651', '09bcaf7d-99e1-4448-bdcb-a5eb5d5df0b4');
insert into books_categories (book_id, category_id) values  ('2d3e1642-2714-48cb-8f1a-8b10abaf0651', '15bab8d1-2889-4e6a-b9ef-4b97b356fe5e');
insert into books_categories (book_id, category_id) values  ('f986870f-bf90-4226-a0ce-d8ca71e11fa2', '54a8b1f0-99bb-4f29-8b09-63b4a37e35a6');
insert into books_categories (book_id, category_id) values  ('f986870f-bf90-4226-a0ce-d8ca71e11fa2', 'd28ee796-b5e7-4734-a3e7-1ee3246b477b');
insert into books_categories (book_id, category_id) values  ('f986870f-bf90-4226-a0ce-d8ca71e11fa2', '88ba265a-f277-4827-9e2d-32633473f099');
insert into books_categories (book_id, category_id) values  ('94f630c5-9fcd-46b9-b19f-d2bafb0ad9d9', 'dc26f7c3-6d26-48a4-b73d-4880c3cc9d78');
insert into books_categories (book_id, category_id) values  ('94f630c5-9fcd-46b9-b19f-d2bafb0ad9d9', '5351e599-ca61-4e55-b78b-cc80a9a9b2e6');
insert into books_categories (book_id, category_id) values  ('94f630c5-9fcd-46b9-b19f-d2bafb0ad9d9', '09bcaf7d-99e1-4448-bdcb-a5eb5d5df0b4');
insert into books_categories (book_id, category_id) values  ('94f630c5-9fcd-46b9-b19f-d2bafb0ad9d9', '15bab8d1-2889-4e6a-b9ef-4b97b356fe5e');
insert into books_categories (book_id, category_id) values  ('9c40e032-1200-43a5-a9a6-8db53ff2af85', '15bab8d1-2889-4e6a-b9ef-4b97b356fe5e');
insert into books_categories (book_id, category_id) values  ('9c40e032-1200-43a5-a9a6-8db53ff2af85', '72f7ad84-7863-4f0a-ad49-9534ef6ea0df');
insert into books_categories (book_id, category_id) values  ('17dcca1b-3f4d-4eba-9e7e-e0926d599035', 'dc26f7c3-6d26-48a4-b73d-4880c3cc9d78');
insert into books_categories (book_id, category_id) values  ('17dcca1b-3f4d-4eba-9e7e-e0926d599035', '15bab8d1-2889-4e6a-b9ef-4b97b356fe5e');
insert into books_categories (book_id, category_id) values  ('84b15913-6024-4e68-b1c4-23bc37bca229', 'dc26f7c3-6d26-48a4-b73d-4880c3cc9d78');
insert into books_categories (book_id, category_id) values  ('84b15913-6024-4e68-b1c4-23bc37bca229', '15bab8d1-2889-4e6a-b9ef-4b97b356fe5e');
insert into books_categories (book_id, category_id) values  ('1d3612be-5378-4415-a82b-db81660638e7', 'dc26f7c3-6d26-48a4-b73d-4880c3cc9d78');
insert into books_categories (book_id, category_id) values  ('1d3612be-5378-4415-a82b-db81660638e7', '15bab8d1-2889-4e6a-b9ef-4b97b356fe5e');
insert into books_categories (book_id, category_id) values  ('1d3612be-5378-4415-a82b-db81660638e7', '5351e599-ca61-4e55-b78b-cc80a9a9b2e6');
insert into books_categories (book_id, category_id) values  ('1c7dce3b-f00b-4d8d-86af-8042843e1c70', 'd28ee796-b5e7-4734-a3e7-1ee3246b477b');
insert into books_categories (book_id, category_id) values  ('1c7dce3b-f00b-4d8d-86af-8042843e1c70', '15bab8d1-2889-4e6a-b9ef-4b97b356fe5e');





insert into authors (author_id, first_name, last_name, year_of_birth, year_of_death, biography) values (
                                                                                                        '114aa1cc-fbdd-476b-9667-c0c5553cbf0f',
                                                                                                        'Marko',
                                                                                                        'Vidojković',
                                                                                                        1975,
                                                                                                        null,
                                                                                                        null);

insert into authors (author_id, first_name, last_name, year_of_birth, year_of_death, biography, image) values ('b20fbdcd-4bae-455e-a564-1400507ed8bc', 'Kristof', 'Keze', 1964, null, null, '8caf056f-3276-4c41-9209-8448ceeb64a7.jpg');
insert into authors (author_id, first_name, last_name, year_of_birth, year_of_death, biography, image) values ('f2d4c1be-3ef6-4f4f-9fe8-e1b6df661502', 'Džejmi', 'Bartlet', 1971, null, null, null);
insert into authors (author_id, first_name, last_name, year_of_birth, year_of_death, biography, image) values ('cd80f545-f964-4d62-a335-72d77b0f5061', 'Misel', 'Marli', null, null, null, '2cd5da7f-6074-43f8-9212-ded77ed03a77.jpg');
insert into authors (author_id, first_name, last_name, year_of_birth, year_of_death, biography, image) values ('c81227de-be7e-4232-8bfe-3d784f53c98b', 'Momo', 'Kapor', 1937, 2010, null, 'b4cfdc71-ad43-4e36-9107-f22ce01148a9.jpg');
insert into authors (author_id, first_name, last_name, year_of_birth, year_of_death, biography, image) values ('94f630c5-9fcd-46b9-b19f-d2bafb0ad9d9', 'Bler', 'Holden', null, null, null, null);
--insert into author (author_id, first_name, last_name, date_of_birth, date_of_death) values ('a227f976-fdd0-4d10-a26e-cfbc0319aea9', '', '', '', '');

insert into books_by_authors(book_id, author_id) values ('f986870f-bf90-4226-a0ce-d8ca71e11fa2', 'b20fbdcd-4bae-455e-a564-1400507ed8bc');
insert into books_by_authors(book_id, author_id) values ('f986870f-bf90-4226-a0ce-d8ca71e11fa2', 'f2d4c1be-3ef6-4f4f-9fe8-e1b6df661502');
insert into books_by_authors(book_id, author_id) values ('94f630c5-9fcd-46b9-b19f-d2bafb0ad9d9', 'cd80f545-f964-4d62-a335-72d77b0f5061');
insert into books_by_authors(book_id, author_id) values ('5b93b744-9c25-441f-8dca-15564bb3e0ec', 'cd80f545-f964-4d62-a335-72d77b0f5061');
insert into books_by_authors(book_id, author_id) values ('1c7dce3b-f00b-4d8d-86af-8042843e1c70', 'c81227de-be7e-4232-8bfe-3d784f53c98b');
insert into books_by_authors(book_id, author_id) values ('1d3612be-5378-4415-a82b-db81660638e7', 'c81227de-be7e-4232-8bfe-3d784f53c98b');
insert into books_by_authors(book_id, author_id) values ('9c40e032-1200-43a5-a9a6-8db53ff2af85', 'c81227de-be7e-4232-8bfe-3d784f53c98b');
insert into books_by_authors(book_id, author_id) values ('f95e4e7e-fc2d-4273-ba90-a77a4cb092a0', '94f630c5-9fcd-46b9-b19f-d2bafb0ad9d9');
























insert into users(user_id, first_name, last_name, username, password, type_of_user, image) values ('e194ba33-c08c-4839-ae38-05b1904407d2', 'Djordjije', 'Kundacina', 'djordjije', '$2a$10$SGYrV025vt8LCppdh/VzVeZIXeFbDr5cBFyuMxCOD.I15p8CzbRie', 0, 'b8a1f139-ffa5-4694-bc97-fc2ddba92ece.jpeg');
insert into administrators(user_id) values ('e194ba33-c08c-4839-ae38-05b1904407d2');
insert into users(user_id, first_name, last_name, username, password, type_of_user, image) values ('9592a9df-811b-44f2-8b26-47e8478eb256', 'Marko', 'Markovic', 'marko', '$2a$10$o1508kIPKW6yvEG.g/ezLeTe7Ah15ELRVTFAmExUiV15dMIrtSIsy', 1, null);
insert into customers(user_id, blocked, email, gender, phone_number, date_of_birth, administrator_id) values ('9592a9df-811b-44f2-8b26-47e8478eb256', false, 'marko@gmail.com', 0, '++387-65-555-55-55', '1990-09-10', null);
insert into users(user_id, first_name, last_name, username, password, type_of_user, image) values ('ceedb308-8c95-4561-b046-516718339d68', 'Andjela', 'Andjelkovic', 'andjela', '$2a$12$/yfrPRXeh4pjIv9vBgL8rO4LBAljGG4fCBosz..EEdSfvD8.Rc6GS', 1, null);
insert into customers(user_id, blocked, email, gender, phone_number, date_of_birth, administrator_id) values ('ceedb308-8c95-4561-b046-516718339d68', false, 'andjela@gmail.com', 0, null, null, null);


insert into users_roles(user_id, role_id) values ('e194ba33-c08c-4839-ae38-05b1904407d2', '1358136f-d0aa-4361-90c0-b7e38a664bdc');
insert into users_roles(user_id, role_id) values ('9592a9df-811b-44f2-8b26-47e8478eb256', 'cb190efc-3c4b-45fc-8307-82039415b61d');
insert into users_roles(user_id, role_id) values ('ceedb308-8c95-4561-b046-516718339d68', 'cb190efc-3c4b-45fc-8307-82039415b61d');

insert into cities(city_id, name, zip_code) values ('70daca69-1363-499b-92b6-60946457c9b2', 'Novi Sad', 21000);
insert into cities(city_id, name, zip_code) values ('1481901e-183c-450e-9fd2-b1a9f9031cba', 'Beograd', 11000);
insert into cities(city_id, name, zip_code) values ('d7c38da3-b4f7-4f1f-a4b3-e26f2c52a6cb', 'Subotica', 24000);

insert into streets(street_id, name, city_id) values ('44b07716-3a80-43cb-9170-827185e94214', 'Bulevar despota Stefana', '70daca69-1363-499b-92b6-60946457c9b2');
insert into streets(street_id, name, city_id) values ('1f7fad28-fde5-41ff-ab7f-308155617a1e', 'Bulevar oslobodjenja', '70daca69-1363-499b-92b6-60946457c9b2');
insert into streets(street_id, name, city_id) values ('a9a1f6c2-6d16-466b-a804-98a24932cad3', 'Bulevar kralja Aleksandra', '1481901e-183c-450e-9fd2-b1a9f9031cba');

insert into locations(location_id, street_id, number) values ('a4732d22-420c-42d3-bf50-0861897bf3dd', '1f7fad28-fde5-41ff-ab7f-308155617a1e', '4');


insert into orders(order_id, location_id, user_id, total_money) values ('a26c3312-c6f7-440b-a401-216bf1f24d04', 'a4732d22-420c-42d3-bf50-0861897bf3dd', '9592a9df-811b-44f2-8b26-47e8478eb256', 20);

insert into order_lines(order_line_id, order_id, book_id, quantity) values ('ed4d675c-91da-431f-9dba-924397243a6c', 'a26c3312-c6f7-440b-a401-216bf1f24d04', '2d3e1642-2714-48cb-8f1a-8b10abaf0651', 2);
insert into order_lines(order_line_id, order_id, book_id, quantity) values ('c2b503ac-65d1-490c-9209-5745fa0ea94e', 'a26c3312-c6f7-440b-a401-216bf1f24d04', '5b7f6e56-d309-45ee-8db7-7c799c43f7ab', 1);