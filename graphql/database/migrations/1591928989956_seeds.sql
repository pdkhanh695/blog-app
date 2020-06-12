INSERT INTO roles
    (title)
VALUES
    ('admin'),
    ('blogger');

INSERT INTO permissions
    (action)
VALUES
    ('post'),
    ('manage-users');

INSERT INTO roles_permissions
    (role_id, permission_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 1);

INSERT INTO users
    (role_id, email, first_name, last_name)
VALUES
    (1, 'pdkhanh95@gmail.com', 'Dinh', 'Phan');

INSERT INTO blog_categories
    (label, description)
VALUES
    ('JavaScript', 'Category descriontion here... this is for JavaScript'),
    ('React', 'Category descriontion here... this is for React'),
    ('Vue', 'Category descriontion here...  this is for JavaScript'),
    ('Tech Culture', 'Category descriontion here... this is for JavaScript'),
    ('Tech News', 'Category descriontion here... this is for JavaScript'),
    ('Brain Health', 'Category descriontion here... this is for JavaScript'),
    ('Cloud Services', 'Category descriontion here... this is for JavaScript');

INSERT INTO blog_posts
    (author_id, title, text, image, active, keyword1, keyword2, bg_src, bg_type)
VALUES
    (1, 'Using AWS S3 for storing Blog Images', 'Lorem ipsum dolor sit amet', 'cloud_storage.jpeg', 1, 'Functional programming', 'ES6', 'cloud_storage.jpeg', 'Image'),
    (1, 'Using AWS S3 for storing Blog Images', 'Lorem ipsum dolor sit amet', 'cloud_storage.jpeg', 1, 'Functional programming', 'ES6', 'cloud_storage.jpeg', 'Image'),
    (1, 'Popular Programming Languages in 2020', 'Lorem ipsum dolor sit amet', 'programming_languages.jpeg', 1, 'Functional programming', 'ES6', 'programming_languages.jpeg', 'Image'),
    (1, 'Brain Hacks for learning to program', 'Lorem ipsum dolor sit amet', 'neuron.jpg', 1, 'Functional programming', 'ES6', 'neuron.jpg', 'Image'),
    (1, 'Software Engineer Salary in 2020', 'Lorem ipsum dolor sit amet', 'money.jpg', 1, 'Functional programming', 'ES6', 'money.jpg', 'Image'),
    (1, 'GrapQL vs REST', 'Lorem ipsum dolor sit amet', 'apollo_graphql.png', 1, 'Functional programming', 'ES6', 'apollo_graphql.png', 'Image'),
    (1, 'Aday in the Life of a Programer', 'Lorem ipsum dolor sit amet', 'puzzled_programer.jpeg', 1, 'Functional programming', 'ES6', 'puzzled_programer.jpeg', 'Image'),
    (1, 'Brain Hacks for Learning to Program', 'Lorem ipsum dolor sit amet', 'neuron.jpg', 1, 'Functional programming', 'ES6', 'Brain Hacks for Learning to Program', 'Image'),
    (1, 'Brain Hacks for Learning to Program', 'Lorem ipsum dolor sit amet', 'neuron.jpg', 1, 'Functional programming', 'ES6', 'Brain Hacks for Learning to Program', 'Image');


INSERT INTO blog_post_comments
    (post_id, author_id, comment)
VALUES
    (1, 1, 'Totaly brooo!'),
    (1, 1, 'Friggin awrsome');

INSERT INTO blog_post_categories
    (post_id, category_id)
VALUES
    (1, 4),
    (1, 5),
    (2, 7),
    (3, 4),
    (3, 5),
    (4, 6),
    (5, 4),
    (6, 1),
    (6, 2),
    (7, 4),
    (8, 6),
    (9, 2),
    (9, 3);



