INSERT INTO product (id, sku, price, description)
VALUES (DEFAULT, 'AAA001', 5.99, 'Product AAA001'),
       (DEFAULT, 'AAA002', 10.00, 'Product AAA002'),
       (DEFAULT, 'BBB001', 0.69, 'Product BBB001');

INSERT INTO address(id, street, city, county, postcode)
VALUES (DEFAULT, '123 Easy Street', 'Warrick', 'Warwickshire', 'WR12TE'),
       (DEFAULT, '46 Avondale Ave', 'Ipswich', 'Suffo', 'LK52GE'),
       (DEFAULT, '85 Asfordby Rd', 'Shetland', 'Warwickshire', 'ZE25PR');

INSERT INTO customer (id, name, address)
VALUES (DEFAULT, 'Rick Sanchez', 1),
       (DEFAULT, 'Walter White', 2),
       (DEFAULT, 'William Butcher', 3);