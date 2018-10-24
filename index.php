<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>The Users</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="styles.css">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.16/backbone.localStorage-min.js"></script>
    
    <script src="models/user.js" defer></script>
    <script src="collections/users.js" defer></script>
    <script src="views/user-view.js" defer></script>
    <script src="views/app-view.js" defer></script>
    <script src="app.js" defer></script>
</head>

<body>
    <header>
        <nav>
            <div class="nav-wrapper">
                <div class="container">
                    <a href="#" class="brand-logo">Test</a>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main id="app">
        <div class="container">
            <section class="section">
                <h3>Users</h3>
                <form class="card form-new">
                    <div class="card-content">
                        <input id="name" type="text" placeholder="Имя">
                        <select id="type">
                            <option value="" disabled selected>Выберите тип</option>
                            <option value="1">Физическое лицо</option>
                            <option value="2">Юридическое лицо</option>
                        </select>
                        <input id="number" type="text" placeholder="Номер">
                        <button id="btn-new-user" type="submit" class="btn waves-effect waves-light">Добавить</button>
                    </div>
                </form>
            </section>
    
            <section class="section" id="main">
                <div class="card">
                    <div class="card-content">
                        <div class="table-filter">
                            <div class="left">
                                Показывать&nbsp;
                                <select id="filter-type">
                                    <option value="" selected>Все</option>
                                    <option value="1">Физическое лицо</option>
                                    <option value="2">Юридическое лицо</option>
                                </select>
                            </div>
                            <div class="right">
                                <button id="clear-list" type="button" class="btn waves-effect waves-light">Удалить всех</button>
                            </div>
                        </div>

                        <table class="striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Имя</th>
                                    <th>Тип</th>
                                    <th>Номер</th>
                                    <th></th>
                                </tr>
                            </thead>
                        
                            <tbody id="user-list">
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    </main>

    <footer class="page-footer">
        <div class="footer-copyright">
            <div class="container">
                &copy; 2018
            </div>
        </div>
    </footer>
  </body>
</html>
