document.getElementById('fetchDataBtn').addEventListener('click', fetchData);

function fetchData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const posts = JSON.parse(this.responseText);
            let output = '';

            posts.forEach(function(post) {
                output += `
                    <style>
                        .card-form:hover {
                         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                         transform: translate3D(0,-1px,0) scale(1.014);
                        cursor: pointer; 
                        }
                        .card-form{
                        border-radius: 25px;
                        transition: all 0.1s ease-in-out;
                        }
                        .go-to-btn:hover{
                            transform: translate(1.2);
                            cursor: pointer; 
                           opacity:0.8;
                        }
                        .go-to-btn{
                        transition: all 0.1s ease-in-out;
                        }
                    </style>
                    <div class="card text-start col-lg-3 col-md-5 col-s-6 mb-3 ml-4 mt-3 h-60 card-form">
                        <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.body}</p>
                        <a href="https://getbootstrap.com/" class="btn go-to-btn" style="background-color: #A594F9; border-radius : 13px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.31);  color: white; ">Go somewhere</a>
                        </div>
                        <div class="card-footer text-muted">
                          2d Before
                        </div>
                    </div>
                    
                `;
            });

            document.getElementById('dataContainer').innerHTML = output;
        } else {
            document.getElementById('dataContainer').innerHTML = '<p class="text-danger">Error fetching data</p>';
        }
    };

    xhr.onerror = function() {
        document.getElementById('dataContainer').innerHTML = '<p class="text-white">please wait ...</p>';
    };

    xhr.send();
}
