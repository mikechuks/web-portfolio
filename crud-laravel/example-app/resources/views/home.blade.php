<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    @auth
     <p>Congrate you are login</p> 
     <form action="/logout" method="post">
        @csrf
        <button>Log Out</button>
     </form>

     <div>
        <h2>Create a new Post</h2>
        <form action="/create-post" method="post">
            @csrf
            <input  name="title" type="text" placeholder="name"/>
            <textarea name="body" placeholder="body content...."></textarea>
            <button>Save Post</button>
        </form>
    </div>

    <div>
        <h2>All Post</h2>
        @foreach($posts as $post)
            <div>
                <h3>{{$post['title']}}</h3>
                {{$post['body']}}
                <p><a href="/edit-post/{{$post->id}}">Edit</a></p>
                <form action="/delete-post/{{$post->id}}" method="post">
                    @csrf
                    @method('DELETE')
                    <button>Delete</button>
                </form>
            </div>
        @endforeach
    </div>
    @else
    <div>
        <h2>Register</h2>
        <form action="/register" method="post">
            @csrf
            <input  name="name" type="text" placeholder="name"/>
            <input  name="email"  type="email" placeholder="email"/>
            <input name="password" type="password" placeholder="password"/>
            <button>Register</button>
        </form>
    </div>
    <div>
        <h2>Login</h2>
        <form action="/login" method="post">
            @csrf
            <input  name="loginName" type="text" placeholder="name"/>
            <input name="loginPassword" type="password" placeholder="password"/>
            <button>login</button>
        </form>
    </div>
    @endauth
</body>
</html>