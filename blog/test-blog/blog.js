const blogPosts = [
    // Your blog post data (e.g., title, content, date, etc.)
    // Example: { title: 'Post 1', content: 'Content for post 1', date: '2023-09-06' },
    // Add more blog posts as needed
    { title: "Post 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu placerat justo, nec dignissim est. Praesent et eros eget ante dapibus aliquam sed eget sem. Proin aliquam diam non diam finibus, eget porta lacus venenatis. Nam cursus, purus in interdum cursus, dolor massa bibendum ipsum, eu volutpat turpis sem vitae lacus. Nunc sagittis neque in massa dignissim volutpat. Nullam a congue dolor. Suspendisse id est non erat faucibus cursus vitae ac velit. Ut nulla dui, sodales in eleifend accumsan, pulvinar et velit. Sed dolor neque, bibendum sit amet tincidunt a, bibendum quis ex. Morbi quis luctus magna. Donec aliquet dui in ligula vestibulum maximus at in augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque lobortis velit ligula, eget vestibulum felis scelerisque non. Pellentesque eget mi nulla. Phasellus semper molestie massa, eget dictum turpis ullamcorper vitae. Praesent at odio ultrices, lobortis nisi eget, lobortis orci. Pellentesque ut sollicitudin nisi. Donec suscipit enim leo, in varius ante fermentum at. Integer ornare mollis tempus. Fusce a fermentum felis. Praesent sagittis rhoncus diam eu gravida. Proin eu vulputate mauris. Mauris euismod dapibus sapien, eleifend varius risus mollis at. Suspendisse ac est vitae ipsum lacinia molestie. Proin venenatis malesuada tortor a consectetur. In dictum, urna sed rutrum cursus, est tortor pretium mauris, non rhoncus dolor sapien ut odio. Proin nec libero mollis, finibus massa at, ultrices nisl. Integer volutpat vulputate lorem, facilisis egestas sem ultrices lacinia. Aenean auctor aliquam ornare. Nulla sodales, velit quis lobortis laoreet, ante ipsum dignissim sapien, eget commodo odio eros nec felis. Pellentesque eget diam non quam mattis pharetra. Aenean vitae tempor libero. Quisque quis scelerisque mauris. Nam ac sapien sit amet nulla lacinia sodales. Suspendisse facilisis risus sit amet lectus lacinia sollicitudin. Ut semper purus est, molestie scelerisque erat vehicula et. Curabitur volutpat finibus velit ac vulputate. Ut quis urna risus. Nullam efficitur elit vitae leo interdum faucibus. Curabitur eu nulla felis. Cras ac sapien placerat, molestie ante et, imperdiet nunc. Sed condimentum tristique erat, eleifend faucibus nisl ullamcorper eu. Duis viverra risus orci, eu suscipit ligula volutpat id. Cras tincidunt erat a ligula ultrices, ac volutpat quam semper. Maecenas dui nibh, blandit in pharetra facilisis, dapibus non mi. Ut commodo ut velit et dignissim. Phasellus sit amet faucibus lacus. Pellentesque convallis metus nec libero gravida pulvinar. Aenean egestas in ex quis consectetur. Suspendisse elit justo, convallis nec laoreet eget, molestie at nisi. Vestibulum suscipit libero eu sapien ornare, at laoreet sem volutpat. Nulla eu quam erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lobortis tellus augue, et lobortis leo egestas sed. Maecenas congue ultricies mi eu maximus. Vivamus dignissim nunc sit amet dui sagittis sagittis. Cras id enim in eros ultrices semper eget sodales justo. Quisque posuere nisi id nisl sagittis rhoncus.", date: "January 1st, 2001"},
    { title: "Post 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu placerat justo, nec dignissim est. Praesent et eros eget ante dapibus aliquam sed eget sem. Proin aliquam diam non diam finibus, eget porta lacus venenatis. Nam cursus, purus in interdum cursus, dolor massa bibendum ipsum, eu volutpat turpis sem vitae lacus. Nunc sagittis neque in massa dignissim volutpat. Nullam a congue dolor. Suspendisse id est non erat faucibus cursus vitae ac velit. Ut nulla dui, sodales in eleifend accumsan, pulvinar et velit. Sed dolor neque, bibendum sit amet tincidunt a, bibendum quis ex. Morbi quis luctus magna. Donec aliquet dui in ligula vestibulum maximus at in augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque lobortis velit ligula, eget vestibulum felis scelerisque non. Pellentesque eget mi nulla. Phasellus semper molestie massa, eget dictum turpis ullamcorper vitae. Praesent at odio ultrices, lobortis nisi eget, lobortis orci. Pellentesque ut sollicitudin nisi. Donec suscipit enim leo, in varius ante fermentum at. Integer ornare mollis tempus. Fusce a fermentum felis. Praesent sagittis rhoncus diam eu gravida. Proin eu vulputate mauris. Mauris euismod dapibus sapien, eleifend varius risus mollis at. Suspendisse ac est vitae ipsum lacinia molestie. Proin venenatis malesuada tortor a consectetur. In dictum, urna sed rutrum cursus, est tortor pretium mauris, non rhoncus dolor sapien ut odio. Proin nec libero mollis, finibus massa at, ultrices nisl. Integer volutpat vulputate lorem, facilisis egestas sem ultrices lacinia. Aenean auctor aliquam ornare. Nulla sodales, velit quis lobortis laoreet, ante ipsum dignissim sapien, eget commodo odio eros nec felis. Pellentesque eget diam non quam mattis pharetra. Aenean vitae tempor libero. Quisque quis scelerisque mauris. Nam ac sapien sit amet nulla lacinia sodales. Suspendisse facilisis risus sit amet lectus lacinia sollicitudin. Ut semper purus est, molestie scelerisque erat vehicula et. Curabitur volutpat finibus velit ac vulputate. Ut quis urna risus. Nullam efficitur elit vitae leo interdum faucibus. Curabitur eu nulla felis. Cras ac sapien placerat, molestie ante et, imperdiet nunc. Sed condimentum tristique erat, eleifend faucibus nisl ullamcorper eu. Duis viverra risus orci, eu suscipit ligula volutpat id. Cras tincidunt erat a ligula ultrices, ac volutpat quam semper. Maecenas dui nibh, blandit in pharetra facilisis, dapibus non mi. Ut commodo ut velit et dignissim. Phasellus sit amet faucibus lacus. Pellentesque convallis metus nec libero gravida pulvinar. Aenean egestas in ex quis consectetur. Suspendisse elit justo, convallis nec laoreet eget, molestie at nisi. Vestibulum suscipit libero eu sapien ornare, at laoreet sem volutpat. Nulla eu quam erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lobortis tellus augue, et lobortis leo egestas sed. Maecenas congue ultricies mi eu maximus. Vivamus dignissim nunc sit amet dui sagittis sagittis. Cras id enim in eros ultrices semper eget sodales justo. Quisque posuere nisi id nisl sagittis rhoncus.", date: "January 1st, 2001"},
    { title: "Post 3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu placerat justo, nec dignissim est. Praesent et eros eget ante dapibus aliquam sed eget sem. Proin aliquam diam non diam finibus, eget porta lacus venenatis. Nam cursus, purus in interdum cursus, dolor massa bibendum ipsum, eu volutpat turpis sem vitae lacus. Nunc sagittis neque in massa dignissim volutpat. Nullam a congue dolor. Suspendisse id est non erat faucibus cursus vitae ac velit. Ut nulla dui, sodales in eleifend accumsan, pulvinar et velit. Sed dolor neque, bibendum sit amet tincidunt a, bibendum quis ex. Morbi quis luctus magna. Donec aliquet dui in ligula vestibulum maximus at in augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque lobortis velit ligula, eget vestibulum felis scelerisque non. Pellentesque eget mi nulla. Phasellus semper molestie massa, eget dictum turpis ullamcorper vitae. Praesent at odio ultrices, lobortis nisi eget, lobortis orci. Pellentesque ut sollicitudin nisi. Donec suscipit enim leo, in varius ante fermentum at. Integer ornare mollis tempus. Fusce a fermentum felis. Praesent sagittis rhoncus diam eu gravida. Proin eu vulputate mauris. Mauris euismod dapibus sapien, eleifend varius risus mollis at. Suspendisse ac est vitae ipsum lacinia molestie. Proin venenatis malesuada tortor a consectetur. In dictum, urna sed rutrum cursus, est tortor pretium mauris, non rhoncus dolor sapien ut odio. Proin nec libero mollis, finibus massa at, ultrices nisl. Integer volutpat vulputate lorem, facilisis egestas sem ultrices lacinia. Aenean auctor aliquam ornare. Nulla sodales, velit quis lobortis laoreet, ante ipsum dignissim sapien, eget commodo odio eros nec felis. Pellentesque eget diam non quam mattis pharetra. Aenean vitae tempor libero. Quisque quis scelerisque mauris. Nam ac sapien sit amet nulla lacinia sodales. Suspendisse facilisis risus sit amet lectus lacinia sollicitudin. Ut semper purus est, molestie scelerisque erat vehicula et. Curabitur volutpat finibus velit ac vulputate. Ut quis urna risus. Nullam efficitur elit vitae leo interdum faucibus. Curabitur eu nulla felis. Cras ac sapien placerat, molestie ante et, imperdiet nunc. Sed condimentum tristique erat, eleifend faucibus nisl ullamcorper eu. Duis viverra risus orci, eu suscipit ligula volutpat id. Cras tincidunt erat a ligula ultrices, ac volutpat quam semper. Maecenas dui nibh, blandit in pharetra facilisis, dapibus non mi. Ut commodo ut velit et dignissim. Phasellus sit amet faucibus lacus. Pellentesque convallis metus nec libero gravida pulvinar. Aenean egestas in ex quis consectetur. Suspendisse elit justo, convallis nec laoreet eget, molestie at nisi. Vestibulum suscipit libero eu sapien ornare, at laoreet sem volutpat. Nulla eu quam erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lobortis tellus augue, et lobortis leo egestas sed. Maecenas congue ultricies mi eu maximus. Vivamus dignissim nunc sit amet dui sagittis sagittis. Cras id enim in eros ultrices semper eget sodales justo. Quisque posuere nisi id nisl sagittis rhoncus.", date: "January 1st, 2001"},
    { title: "Post 4", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu placerat justo, nec dignissim est. Praesent et eros eget ante dapibus aliquam sed eget sem. Proin aliquam diam non diam finibus, eget porta lacus venenatis. Nam cursus, purus in interdum cursus, dolor massa bibendum ipsum, eu volutpat turpis sem vitae lacus. Nunc sagittis neque in massa dignissim volutpat. Nullam a congue dolor. Suspendisse id est non erat faucibus cursus vitae ac velit. Ut nulla dui, sodales in eleifend accumsan, pulvinar et velit. Sed dolor neque, bibendum sit amet tincidunt a, bibendum quis ex. Morbi quis luctus magna. Donec aliquet dui in ligula vestibulum maximus at in augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque lobortis velit ligula, eget vestibulum felis scelerisque non. Pellentesque eget mi nulla. Phasellus semper molestie massa, eget dictum turpis ullamcorper vitae. Praesent at odio ultrices, lobortis nisi eget, lobortis orci. Pellentesque ut sollicitudin nisi. Donec suscipit enim leo, in varius ante fermentum at. Integer ornare mollis tempus. Fusce a fermentum felis. Praesent sagittis rhoncus diam eu gravida. Proin eu vulputate mauris. Mauris euismod dapibus sapien, eleifend varius risus mollis at. Suspendisse ac est vitae ipsum lacinia molestie. Proin venenatis malesuada tortor a consectetur. In dictum, urna sed rutrum cursus, est tortor pretium mauris, non rhoncus dolor sapien ut odio. Proin nec libero mollis, finibus massa at, ultrices nisl. Integer volutpat vulputate lorem, facilisis egestas sem ultrices lacinia. Aenean auctor aliquam ornare. Nulla sodales, velit quis lobortis laoreet, ante ipsum dignissim sapien, eget commodo odio eros nec felis. Pellentesque eget diam non quam mattis pharetra. Aenean vitae tempor libero. Quisque quis scelerisque mauris. Nam ac sapien sit amet nulla lacinia sodales. Suspendisse facilisis risus sit amet lectus lacinia sollicitudin. Ut semper purus est, molestie scelerisque erat vehicula et. Curabitur volutpat finibus velit ac vulputate. Ut quis urna risus. Nullam efficitur elit vitae leo interdum faucibus. Curabitur eu nulla felis. Cras ac sapien placerat, molestie ante et, imperdiet nunc. Sed condimentum tristique erat, eleifend faucibus nisl ullamcorper eu. Duis viverra risus orci, eu suscipit ligula volutpat id. Cras tincidunt erat a ligula ultrices, ac volutpat quam semper. Maecenas dui nibh, blandit in pharetra facilisis, dapibus non mi. Ut commodo ut velit et dignissim. Phasellus sit amet faucibus lacus. Pellentesque convallis metus nec libero gravida pulvinar. Aenean egestas in ex quis consectetur. Suspendisse elit justo, convallis nec laoreet eget, molestie at nisi. Vestibulum suscipit libero eu sapien ornare, at laoreet sem volutpat. Nulla eu quam erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lobortis tellus augue, et lobortis leo egestas sed. Maecenas congue ultricies mi eu maximus. Vivamus dignissim nunc sit amet dui sagittis sagittis. Cras id enim in eros ultrices semper eget sodales justo. Quisque posuere nisi id nisl sagittis rhoncus.", date: "January 1st, 2001"},
    { title: "Post 5", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu placerat justo, nec dignissim est. Praesent et eros eget ante dapibus aliquam sed eget sem. Proin aliquam diam non diam finibus, eget porta lacus venenatis. Nam cursus, purus in interdum cursus, dolor massa bibendum ipsum, eu volutpat turpis sem vitae lacus. Nunc sagittis neque in massa dignissim volutpat. Nullam a congue dolor. Suspendisse id est non erat faucibus cursus vitae ac velit. Ut nulla dui, sodales in eleifend accumsan, pulvinar et velit. Sed dolor neque, bibendum sit amet tincidunt a, bibendum quis ex. Morbi quis luctus magna. Donec aliquet dui in ligula vestibulum maximus at in augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque lobortis velit ligula, eget vestibulum felis scelerisque non. Pellentesque eget mi nulla. Phasellus semper molestie massa, eget dictum turpis ullamcorper vitae. Praesent at odio ultrices, lobortis nisi eget, lobortis orci. Pellentesque ut sollicitudin nisi. Donec suscipit enim leo, in varius ante fermentum at. Integer ornare mollis tempus. Fusce a fermentum felis. Praesent sagittis rhoncus diam eu gravida. Proin eu vulputate mauris. Mauris euismod dapibus sapien, eleifend varius risus mollis at. Suspendisse ac est vitae ipsum lacinia molestie. Proin venenatis malesuada tortor a consectetur. In dictum, urna sed rutrum cursus, est tortor pretium mauris, non rhoncus dolor sapien ut odio. Proin nec libero mollis, finibus massa at, ultrices nisl. Integer volutpat vulputate lorem, facilisis egestas sem ultrices lacinia. Aenean auctor aliquam ornare. Nulla sodales, velit quis lobortis laoreet, ante ipsum dignissim sapien, eget commodo odio eros nec felis. Pellentesque eget diam non quam mattis pharetra. Aenean vitae tempor libero. Quisque quis scelerisque mauris. Nam ac sapien sit amet nulla lacinia sodales. Suspendisse facilisis risus sit amet lectus lacinia sollicitudin. Ut semper purus est, molestie scelerisque erat vehicula et. Curabitur volutpat finibus velit ac vulputate. Ut quis urna risus. Nullam efficitur elit vitae leo interdum faucibus. Curabitur eu nulla felis. Cras ac sapien placerat, molestie ante et, imperdiet nunc. Sed condimentum tristique erat, eleifend faucibus nisl ullamcorper eu. Duis viverra risus orci, eu suscipit ligula volutpat id. Cras tincidunt erat a ligula ultrices, ac volutpat quam semper. Maecenas dui nibh, blandit in pharetra facilisis, dapibus non mi. Ut commodo ut velit et dignissim. Phasellus sit amet faucibus lacus. Pellentesque convallis metus nec libero gravida pulvinar. Aenean egestas in ex quis consectetur. Suspendisse elit justo, convallis nec laoreet eget, molestie at nisi. Vestibulum suscipit libero eu sapien ornare, at laoreet sem volutpat. Nulla eu quam erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lobortis tellus augue, et lobortis leo egestas sed. Maecenas congue ultricies mi eu maximus. Vivamus dignissim nunc sit amet dui sagittis sagittis. Cras id enim in eros ultrices semper eget sodales justo. Quisque posuere nisi id nisl sagittis rhoncus.", date: "January 1st, 2001"},
    { title: "Post 6", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu placerat justo, nec dignissim est. Praesent et eros eget ante dapibus aliquam sed eget sem. Proin aliquam diam non diam finibus, eget porta lacus venenatis. Nam cursus, purus in interdum cursus, dolor massa bibendum ipsum, eu volutpat turpis sem vitae lacus. Nunc sagittis neque in massa dignissim volutpat. Nullam a congue dolor. Suspendisse id est non erat faucibus cursus vitae ac velit. Ut nulla dui, sodales in eleifend accumsan, pulvinar et velit. Sed dolor neque, bibendum sit amet tincidunt a, bibendum quis ex. Morbi quis luctus magna. Donec aliquet dui in ligula vestibulum maximus at in augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque lobortis velit ligula, eget vestibulum felis scelerisque non. Pellentesque eget mi nulla. Phasellus semper molestie massa, eget dictum turpis ullamcorper vitae. Praesent at odio ultrices, lobortis nisi eget, lobortis orci. Pellentesque ut sollicitudin nisi. Donec suscipit enim leo, in varius ante fermentum at. Integer ornare mollis tempus. Fusce a fermentum felis. Praesent sagittis rhoncus diam eu gravida. Proin eu vulputate mauris. Mauris euismod dapibus sapien, eleifend varius risus mollis at. Suspendisse ac est vitae ipsum lacinia molestie. Proin venenatis malesuada tortor a consectetur. In dictum, urna sed rutrum cursus, est tortor pretium mauris, non rhoncus dolor sapien ut odio. Proin nec libero mollis, finibus massa at, ultrices nisl. Integer volutpat vulputate lorem, facilisis egestas sem ultrices lacinia. Aenean auctor aliquam ornare. Nulla sodales, velit quis lobortis laoreet, ante ipsum dignissim sapien, eget commodo odio eros nec felis. Pellentesque eget diam non quam mattis pharetra. Aenean vitae tempor libero. Quisque quis scelerisque mauris. Nam ac sapien sit amet nulla lacinia sodales. Suspendisse facilisis risus sit amet lectus lacinia sollicitudin. Ut semper purus est, molestie scelerisque erat vehicula et. Curabitur volutpat finibus velit ac vulputate. Ut quis urna risus. Nullam efficitur elit vitae leo interdum faucibus. Curabitur eu nulla felis. Cras ac sapien placerat, molestie ante et, imperdiet nunc. Sed condimentum tristique erat, eleifend faucibus nisl ullamcorper eu. Duis viverra risus orci, eu suscipit ligula volutpat id. Cras tincidunt erat a ligula ultrices, ac volutpat quam semper. Maecenas dui nibh, blandit in pharetra facilisis, dapibus non mi. Ut commodo ut velit et dignissim. Phasellus sit amet faucibus lacus. Pellentesque convallis metus nec libero gravida pulvinar. Aenean egestas in ex quis consectetur. Suspendisse elit justo, convallis nec laoreet eget, molestie at nisi. Vestibulum suscipit libero eu sapien ornare, at laoreet sem volutpat. Nulla eu quam erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lobortis tellus augue, et lobortis leo egestas sed. Maecenas congue ultricies mi eu maximus. Vivamus dignissim nunc sit amet dui sagittis sagittis. Cras id enim in eros ultrices semper eget sodales justo. Quisque posuere nisi id nisl sagittis rhoncus.", date: "January 1st, 2001"},
    { title: "Post 7", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu placerat justo, nec dignissim est. Praesent et eros eget ante dapibus aliquam sed eget sem. Proin aliquam diam non diam finibus, eget porta lacus venenatis. Nam cursus, purus in interdum cursus, dolor massa bibendum ipsum, eu volutpat turpis sem vitae lacus. Nunc sagittis neque in massa dignissim volutpat. Nullam a congue dolor. Suspendisse id est non erat faucibus cursus vitae ac velit. Ut nulla dui, sodales in eleifend accumsan, pulvinar et velit. Sed dolor neque, bibendum sit amet tincidunt a, bibendum quis ex. Morbi quis luctus magna. Donec aliquet dui in ligula vestibulum maximus at in augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque lobortis velit ligula, eget vestibulum felis scelerisque non. Pellentesque eget mi nulla. Phasellus semper molestie massa, eget dictum turpis ullamcorper vitae. Praesent at odio ultrices, lobortis nisi eget, lobortis orci. Pellentesque ut sollicitudin nisi. Donec suscipit enim leo, in varius ante fermentum at. Integer ornare mollis tempus. Fusce a fermentum felis. Praesent sagittis rhoncus diam eu gravida. Proin eu vulputate mauris. Mauris euismod dapibus sapien, eleifend varius risus mollis at. Suspendisse ac est vitae ipsum lacinia molestie. Proin venenatis malesuada tortor a consectetur. In dictum, urna sed rutrum cursus, est tortor pretium mauris, non rhoncus dolor sapien ut odio. Proin nec libero mollis, finibus massa at, ultrices nisl. Integer volutpat vulputate lorem, facilisis egestas sem ultrices lacinia. Aenean auctor aliquam ornare. Nulla sodales, velit quis lobortis laoreet, ante ipsum dignissim sapien, eget commodo odio eros nec felis. Pellentesque eget diam non quam mattis pharetra. Aenean vitae tempor libero. Quisque quis scelerisque mauris. Nam ac sapien sit amet nulla lacinia sodales. Suspendisse facilisis risus sit amet lectus lacinia sollicitudin. Ut semper purus est, molestie scelerisque erat vehicula et. Curabitur volutpat finibus velit ac vulputate. Ut quis urna risus. Nullam efficitur elit vitae leo interdum faucibus. Curabitur eu nulla felis. Cras ac sapien placerat, molestie ante et, imperdiet nunc. Sed condimentum tristique erat, eleifend faucibus nisl ullamcorper eu. Duis viverra risus orci, eu suscipit ligula volutpat id. Cras tincidunt erat a ligula ultrices, ac volutpat quam semper. Maecenas dui nibh, blandit in pharetra facilisis, dapibus non mi. Ut commodo ut velit et dignissim. Phasellus sit amet faucibus lacus. Pellentesque convallis metus nec libero gravida pulvinar. Aenean egestas in ex quis consectetur. Suspendisse elit justo, convallis nec laoreet eget, molestie at nisi. Vestibulum suscipit libero eu sapien ornare, at laoreet sem volutpat. Nulla eu quam erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lobortis tellus augue, et lobortis leo egestas sed. Maecenas congue ultricies mi eu maximus. Vivamus dignissim nunc sit amet dui sagittis sagittis. Cras id enim in eros ultrices semper eget sodales justo. Quisque posuere nisi id nisl sagittis rhoncus.", date: "January 1st, 2001"},
    { title: "Post 8", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu placerat justo, nec dignissim est. Praesent et eros eget ante dapibus aliquam sed eget sem. Proin aliquam diam non diam finibus, eget porta lacus venenatis. Nam cursus, purus in interdum cursus, dolor massa bibendum ipsum, eu volutpat turpis sem vitae lacus. Nunc sagittis neque in massa dignissim volutpat. Nullam a congue dolor. Suspendisse id est non erat faucibus cursus vitae ac velit. Ut nulla dui, sodales in eleifend accumsan, pulvinar et velit. Sed dolor neque, bibendum sit amet tincidunt a, bibendum quis ex. Morbi quis luctus magna. Donec aliquet dui in ligula vestibulum maximus at in augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque lobortis velit ligula, eget vestibulum felis scelerisque non. Pellentesque eget mi nulla. Phasellus semper molestie massa, eget dictum turpis ullamcorper vitae. Praesent at odio ultrices, lobortis nisi eget, lobortis orci. Pellentesque ut sollicitudin nisi. Donec suscipit enim leo, in varius ante fermentum at. Integer ornare mollis tempus. Fusce a fermentum felis. Praesent sagittis rhoncus diam eu gravida. Proin eu vulputate mauris. Mauris euismod dapibus sapien, eleifend varius risus mollis at. Suspendisse ac est vitae ipsum lacinia molestie. Proin venenatis malesuada tortor a consectetur. In dictum, urna sed rutrum cursus, est tortor pretium mauris, non rhoncus dolor sapien ut odio. Proin nec libero mollis, finibus massa at, ultrices nisl. Integer volutpat vulputate lorem, facilisis egestas sem ultrices lacinia. Aenean auctor aliquam ornare. Nulla sodales, velit quis lobortis laoreet, ante ipsum dignissim sapien, eget commodo odio eros nec felis. Pellentesque eget diam non quam mattis pharetra. Aenean vitae tempor libero. Quisque quis scelerisque mauris. Nam ac sapien sit amet nulla lacinia sodales. Suspendisse facilisis risus sit amet lectus lacinia sollicitudin. Ut semper purus est, molestie scelerisque erat vehicula et. Curabitur volutpat finibus velit ac vulputate. Ut quis urna risus. Nullam efficitur elit vitae leo interdum faucibus. Curabitur eu nulla felis. Cras ac sapien placerat, molestie ante et, imperdiet nunc. Sed condimentum tristique erat, eleifend faucibus nisl ullamcorper eu. Duis viverra risus orci, eu suscipit ligula volutpat id. Cras tincidunt erat a ligula ultrices, ac volutpat quam semper. Maecenas dui nibh, blandit in pharetra facilisis, dapibus non mi. Ut commodo ut velit et dignissim. Phasellus sit amet faucibus lacus. Pellentesque convallis metus nec libero gravida pulvinar. Aenean egestas in ex quis consectetur. Suspendisse elit justo, convallis nec laoreet eget, molestie at nisi. Vestibulum suscipit libero eu sapien ornare, at laoreet sem volutpat. Nulla eu quam erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lobortis tellus augue, et lobortis leo egestas sed. Maecenas congue ultricies mi eu maximus. Vivamus dignissim nunc sit amet dui sagittis sagittis. Cras id enim in eros ultrices semper eget sodales justo. Quisque posuere nisi id nisl sagittis rhoncus.", date: "January 1st, 2001"},
    { title: "Post 9", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu placerat justo, nec dignissim est. Praesent et eros eget ante dapibus aliquam sed eget sem. Proin aliquam diam non diam finibus, eget porta lacus venenatis. Nam cursus, purus in interdum cursus, dolor massa bibendum ipsum, eu volutpat turpis sem vitae lacus. Nunc sagittis neque in massa dignissim volutpat. Nullam a congue dolor. Suspendisse id est non erat faucibus cursus vitae ac velit. Ut nulla dui, sodales in eleifend accumsan, pulvinar et velit. Sed dolor neque, bibendum sit amet tincidunt a, bibendum quis ex. Morbi quis luctus magna. Donec aliquet dui in ligula vestibulum maximus at in augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque lobortis velit ligula, eget vestibulum felis scelerisque non. Pellentesque eget mi nulla. Phasellus semper molestie massa, eget dictum turpis ullamcorper vitae. Praesent at odio ultrices, lobortis nisi eget, lobortis orci. Pellentesque ut sollicitudin nisi. Donec suscipit enim leo, in varius ante fermentum at. Integer ornare mollis tempus. Fusce a fermentum felis. Praesent sagittis rhoncus diam eu gravida. Proin eu vulputate mauris. Mauris euismod dapibus sapien, eleifend varius risus mollis at. Suspendisse ac est vitae ipsum lacinia molestie. Proin venenatis malesuada tortor a consectetur. In dictum, urna sed rutrum cursus, est tortor pretium mauris, non rhoncus dolor sapien ut odio. Proin nec libero mollis, finibus massa at, ultrices nisl. Integer volutpat vulputate lorem, facilisis egestas sem ultrices lacinia. Aenean auctor aliquam ornare. Nulla sodales, velit quis lobortis laoreet, ante ipsum dignissim sapien, eget commodo odio eros nec felis. Pellentesque eget diam non quam mattis pharetra. Aenean vitae tempor libero. Quisque quis scelerisque mauris. Nam ac sapien sit amet nulla lacinia sodales. Suspendisse facilisis risus sit amet lectus lacinia sollicitudin. Ut semper purus est, molestie scelerisque erat vehicula et. Curabitur volutpat finibus velit ac vulputate. Ut quis urna risus. Nullam efficitur elit vitae leo interdum faucibus. Curabitur eu nulla felis. Cras ac sapien placerat, molestie ante et, imperdiet nunc. Sed condimentum tristique erat, eleifend faucibus nisl ullamcorper eu. Duis viverra risus orci, eu suscipit ligula volutpat id. Cras tincidunt erat a ligula ultrices, ac volutpat quam semper. Maecenas dui nibh, blandit in pharetra facilisis, dapibus non mi. Ut commodo ut velit et dignissim. Phasellus sit amet faucibus lacus. Pellentesque convallis metus nec libero gravida pulvinar. Aenean egestas in ex quis consectetur. Suspendisse elit justo, convallis nec laoreet eget, molestie at nisi. Vestibulum suscipit libero eu sapien ornare, at laoreet sem volutpat. Nulla eu quam erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lobortis tellus augue, et lobortis leo egestas sed. Maecenas congue ultricies mi eu maximus. Vivamus dignissim nunc sit amet dui sagittis sagittis. Cras id enim in eros ultrices semper eget sodales justo. Quisque posuere nisi id nisl sagittis rhoncus.", date: "January 1st, 2001"},
    { title: "Post 10", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu placerat justo, nec dignissim est. Praesent et eros eget ante dapibus aliquam sed eget sem. Proin aliquam diam non diam finibus, eget porta lacus venenatis. Nam cursus, purus in interdum cursus, dolor massa bibendum ipsum, eu volutpat turpis sem vitae lacus. Nunc sagittis neque in massa dignissim volutpat. Nullam a congue dolor. Suspendisse id est non erat faucibus cursus vitae ac velit. Ut nulla dui, sodales in eleifend accumsan, pulvinar et velit. Sed dolor neque, bibendum sit amet tincidunt a, bibendum quis ex. Morbi quis luctus magna. Donec aliquet dui in ligula vestibulum maximus at in augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque lobortis velit ligula, eget vestibulum felis scelerisque non. Pellentesque eget mi nulla. Phasellus semper molestie massa, eget dictum turpis ullamcorper vitae. Praesent at odio ultrices, lobortis nisi eget, lobortis orci. Pellentesque ut sollicitudin nisi. Donec suscipit enim leo, in varius ante fermentum at. Integer ornare mollis tempus. Fusce a fermentum felis. Praesent sagittis rhoncus diam eu gravida. Proin eu vulputate mauris. Mauris euismod dapibus sapien, eleifend varius risus mollis at. Suspendisse ac est vitae ipsum lacinia molestie. Proin venenatis malesuada tortor a consectetur. In dictum, urna sed rutrum cursus, est tortor pretium mauris, non rhoncus dolor sapien ut odio. Proin nec libero mollis, finibus massa at, ultrices nisl. Integer volutpat vulputate lorem, facilisis egestas sem ultrices lacinia. Aenean auctor aliquam ornare. Nulla sodales, velit quis lobortis laoreet, ante ipsum dignissim sapien, eget commodo odio eros nec felis. Pellentesque eget diam non quam mattis pharetra. Aenean vitae tempor libero. Quisque quis scelerisque mauris. Nam ac sapien sit amet nulla lacinia sodales. Suspendisse facilisis risus sit amet lectus lacinia sollicitudin. Ut semper purus est, molestie scelerisque erat vehicula et. Curabitur volutpat finibus velit ac vulputate. Ut quis urna risus. Nullam efficitur elit vitae leo interdum faucibus. Curabitur eu nulla felis. Cras ac sapien placerat, molestie ante et, imperdiet nunc. Sed condimentum tristique erat, eleifend faucibus nisl ullamcorper eu. Duis viverra risus orci, eu suscipit ligula volutpat id. Cras tincidunt erat a ligula ultrices, ac volutpat quam semper. Maecenas dui nibh, blandit in pharetra facilisis, dapibus non mi. Ut commodo ut velit et dignissim. Phasellus sit amet faucibus lacus. Pellentesque convallis metus nec libero gravida pulvinar. Aenean egestas in ex quis consectetur. Suspendisse elit justo, convallis nec laoreet eget, molestie at nisi. Vestibulum suscipit libero eu sapien ornare, at laoreet sem volutpat. Nulla eu quam erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lobortis tellus augue, et lobortis leo egestas sed. Maecenas congue ultricies mi eu maximus. Vivamus dignissim nunc sit amet dui sagittis sagittis. Cras id enim in eros ultrices semper eget sodales justo. Quisque posuere nisi id nisl sagittis rhoncus.", date: "January 1st, 2001"},
    { title: "Post 11", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu placerat justo, nec dignissim est. Praesent et eros eget ante dapibus aliquam sed eget sem. Proin aliquam diam non diam finibus, eget porta lacus venenatis. Nam cursus, purus in interdum cursus, dolor massa bibendum ipsum, eu volutpat turpis sem vitae lacus. Nunc sagittis neque in massa dignissim volutpat. Nullam a congue dolor. Suspendisse id est non erat faucibus cursus vitae ac velit. Ut nulla dui, sodales in eleifend accumsan, pulvinar et velit. Sed dolor neque, bibendum sit amet tincidunt a, bibendum quis ex. Morbi quis luctus magna. Donec aliquet dui in ligula vestibulum maximus at in augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque lobortis velit ligula, eget vestibulum felis scelerisque non. Pellentesque eget mi nulla. Phasellus semper molestie massa, eget dictum turpis ullamcorper vitae. Praesent at odio ultrices, lobortis nisi eget, lobortis orci. Pellentesque ut sollicitudin nisi. Donec suscipit enim leo, in varius ante fermentum at. Integer ornare mollis tempus. Fusce a fermentum felis. Praesent sagittis rhoncus diam eu gravida. Proin eu vulputate mauris. Mauris euismod dapibus sapien, eleifend varius risus mollis at. Suspendisse ac est vitae ipsum lacinia molestie. Proin venenatis malesuada tortor a consectetur. In dictum, urna sed rutrum cursus, est tortor pretium mauris, non rhoncus dolor sapien ut odio. Proin nec libero mollis, finibus massa at, ultrices nisl. Integer volutpat vulputate lorem, facilisis egestas sem ultrices lacinia. Aenean auctor aliquam ornare. Nulla sodales, velit quis lobortis laoreet, ante ipsum dignissim sapien, eget commodo odio eros nec felis. Pellentesque eget diam non quam mattis pharetra. Aenean vitae tempor libero. Quisque quis scelerisque mauris. Nam ac sapien sit amet nulla lacinia sodales. Suspendisse facilisis risus sit amet lectus lacinia sollicitudin. Ut semper purus est, molestie scelerisque erat vehicula et. Curabitur volutpat finibus velit ac vulputate. Ut quis urna risus. Nullam efficitur elit vitae leo interdum faucibus. Curabitur eu nulla felis. Cras ac sapien placerat, molestie ante et, imperdiet nunc. Sed condimentum tristique erat, eleifend faucibus nisl ullamcorper eu. Duis viverra risus orci, eu suscipit ligula volutpat id. Cras tincidunt erat a ligula ultrices, ac volutpat quam semper. Maecenas dui nibh, blandit in pharetra facilisis, dapibus non mi. Ut commodo ut velit et dignissim. Phasellus sit amet faucibus lacus. Pellentesque convallis metus nec libero gravida pulvinar. Aenean egestas in ex quis consectetur. Suspendisse elit justo, convallis nec laoreet eget, molestie at nisi. Vestibulum suscipit libero eu sapien ornare, at laoreet sem volutpat. Nulla eu quam erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lobortis tellus augue, et lobortis leo egestas sed. Maecenas congue ultricies mi eu maximus. Vivamus dignissim nunc sit amet dui sagittis sagittis. Cras id enim in eros ultrices semper eget sodales justo. Quisque posuere nisi id nisl sagittis rhoncus.", date: "January 1st, 2001"}
];

const postsPerPage = 3;
let currentPage = 1;

function displayPosts(page) {
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const blogPostsSlice = blogPosts.slice(startIndex, endIndex);

    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';

    for (const post of blogPostsSlice) {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content.slice(0,202) + "..."}</p>
            <span>${post.date}</span>
        `;
        blogPostsContainer.appendChild(postElement);
    }
}

function displayPagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(blogPosts.length / postsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayPosts(currentPage);
            displayPagination();
        });
        paginationContainer.appendChild(pageButton);
    }
}

// Initial page load
displayPosts(currentPage);
displayPagination();
