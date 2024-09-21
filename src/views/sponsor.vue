<template>
<h1>Sponsor a game!</h1>
<div style="display: flex; flex-direction: column; align-items: flex-end;">
    <label for="register-name">
        Project Name
        <input type="text" id="sponsor-name">
    </label>
    <label for="sponsor-logo">
        Project Logo (image url)
        <input type="text" id="sponsor-logo">
    </label>
    <label for="sponsor-about">
        About the project (140 chars)
        <textarea id="sponsor-about"></textarea>
    </label>
    <label for="sponsor-amount">
        Amount
        <input type="text" id="sponsor-amount">
    </label>
    <button>Send</button>
</div>
</template>