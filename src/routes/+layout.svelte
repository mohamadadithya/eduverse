<script lang="ts">
    import '../app.css'
	import Container from '../components/Container.svelte';
	import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<title>Eduverse</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
		rel="stylesheet"
	/>
	<link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro-v6@44659d9/css/all.min.css" rel="stylesheet" type="text/css" />
</svelte:head>

<main class="font-poppins">
    <Header />
    <Container>
        <slot />
    </Container>
</main>