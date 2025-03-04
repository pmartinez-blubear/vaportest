<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        <!-- Styles -->
        @livewireStyles
        @vite('resources/css/app.css')
    </head>
    <body class="antialiased">
        <x-header/>
        <div class="min-h-full">
            {{ $slot }}
        </div>
        <x-footer/>
        @livewireScripts
    </body>
</html>