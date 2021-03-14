var data_projects = {}

$.ajax({
    url: 'data/skills/skills.json',
    dataType: 'json',
    success: function(data) {
        // console.log(data); //uncomment this for debug
        // Triptube.dataController.timelineEvents(data);

        //the element where the articles should be appended
        var el = $('#skills');

        //empty this element first
        el.empty();

        //you can use jquery each to append all new articles

        for (let i=0; i<data.length; i++) {
            var name = data[i].name
            var percent = data[i].percent

            el.append(
                    '<div class="bar flex">' +
                    '<div class="bar fill" style="width:' + percent + '%">' +
                    '<div class="tag bold flex">' + name +'</div>' +
                    '</div>' +
                    '<span>' + percent + '%</span>' +
                    '</div>'
                        );
        }
    }
});

// Project panel loader
$.ajax({
    url: 'data/projects/filters.json',
    dataType: 'json',
    success: function(data) {
        // console.log(data); //uncomment this for debug

        //the element where the articles should be appended
        var first = $('#first-panel');
        var second = $('#second-panel');

        //you can use jquery each to append all new articles

        for (let i=0; i<data.length; i++) {
            var name = data[i].name
            var filter = data[i].filter

            first.append(
                '<div class="filter" data-filter=".'+ filter + '">' + name + '</div>');
            second.append(
                '<div class="filter" data-filter=".'+ filter + '">' + name + '</div>');

        }
    }
});


// Project panel loader
$.ajax({
    url: 'data/projects/projects.json',
    dataType: 'json',
    success: function(data) {
        // console.log(data); //uncomment this for debug
        //the element where the articles should be appended
        var gallery = $('#gallery');
        gallery.empty()
        //you can use jquery each to append all new articles

        for (let i=0; i<data.length; i++) {
            var id = data[i].id
            var filter = data[i].filter
            var img = data[i].img
            var tag = data[i].tag
            var title = data[i].title
            var detail = data[i].detail
            var link = data[i].link
            var technology = data[i].technology
            var dir_path = data[i].img[0].split('/')
            dir_path.pop(-1)
            dir_path.push('front.jpg')
            dir_path = dir_path.join('/')

            gallery.append(
                '<div class="mix ' + filter + '" data-my-order="1">' +
                '<div>' +
                '<div class="card"></div>' +
                '<div class="text">' +
                '<div class="bold">' + title + '</div>' +
                '<span class="highlight">' + technology + '</span>' +
                '</div>' +
                '<div class="button" id="' + id + '">LEARN MORE</div>' +
                '</div>' +
                '</div>'
            );

            data_projects[id] = {
                "tag": tag,
                "title": title,
                "detail": detail,
                "img": img,
                "link": link
            }
            gallery[0].children[i].getElementsByClassName('card')[0].style.backgroundImage = "url(" + dir_path + ")"


        }
    }
});


// Project panel loader
$.ajax({
    url: 'data/blog/blog.json',
    dataType: 'json',
    success: function(data) {
        // console.log(data); //uncomment this for debug
        //the element where the articles should be appended
        var blog_source = $('#blog_source');
        blog_source.empty()
        //you can use jquery each to append all new articles

        for (let i=0; i<data.length; i++) {
            var date = data[i].date
            var img = data[i].img
            var title = data[i].title
            var text = data[i].text
            var href = data[i].href

            blog_source.append(
                '<a href="' + href + '" target="_blank">' +
                '<div class="blog-wrap waypoint" data-animation="fade-in" data-delay=".4s">' +
                '<div class="fade-wrap">' +
                '<div class="thumb"></div>' +
                '<div class="label bold">' + title + '</div>' +
                '<div class="date">' + date + '</div>' +
                '<div class="bar"></div>' +
                '<div class="text">' + text +
                '</div>' +
                '</div>' +
                '</div>' +
                '</a>'
            );

            blog_source[0].children[i].getElementsByClassName('thumb')[0].setAttribute("style", "background: url(" + img + ") center center/cover")


        }
    }
});

// Project panel loader
$.ajax({
    url: 'data/services/services.json',
    dataType: 'json',
    success: function(data) {
        var services_source = $('#services_source');
        services_source.empty()
        //you can use jquery each to append all new articles

        for (let i=0; i<data.length; i++) {
            var img = data[i].img
            var title = data[i].title
            var text = data[i].text
            var href = data[i].href

            services_source.append(
                '<a href="' + href + '" target="_blank">' +
                '<div class="blog-wrap waypoint" data-animation="fade-in" data-delay=".4s">' +
                '<div class="fade-wrap">' +
                '<div class="thumb"></div>' +
                '<div class="label bold">' + title + '</div>' +
                '<div class="bar"></div>' +
                '<div class="text">' + text +
                '</div>' +
                '</div>' +
                '</div>' +
                '</a>'
            );

            services_source[0].children[i].getElementsByClassName('thumb')[0].setAttribute("style", "background: url(" + img + ") center center/cover")


        }
    }
});