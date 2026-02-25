<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google-adsense-account" content="ca-pub-3975087268988772">
    <title>HMLilder Studio - Html Minifier</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="src/sidebar.css?v=1.0">
    <link rel="icon" type="image/x-icon" href="public/fav.ico?v=2">

    <!-- style -->
    <link rel="stylesheet" href="src/minifier.css?v=1">
</head>
<body>
    <div id="sidebar-container"></div>
    <button class="toggle-btn" onclick="toggleSidebar()">☰ Menu</button>
    <script type="module" src="src/sidebar.js?v=1.5"></script>

    <script>
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const content = document.getElementById('container');
        sidebar.classList.toggle('active');
        content.classList.toggle('shift');
    }
    </script>

<div class="container">
    <header class="header">
        <h1><i class="fas fa-code"></i>HTML Minifier</h1>

        <p class="tagline">Kode Lebih Kecil, Website Lebih Ngebut.</p>

        <p>(Opsional) Kamu bisa mendukung pengembangan HMLilder dengan menggunakan layanan yang kami rekomendasikan. Jika kamu memang membutuhkan hosting atau domain, menggunakan link ini bisa membantu kami tanpa biaya tambahan.</p>
        <a href="https://my.domainesia.com/ref.php?u=26644">
            <button>Dukung</button>
        </a>

        <p>Dokumentasi: <a href="daftar-artikel/Tools-Templates/Dokumentasi-Tools-HML.html#htmlMinifier">klik disini</a></p>
    </header>
    
    <?php
    $minified = '';
    $error = '';
    $originalSize = 0;
    $minifiedSize = 0;
    $reduction = 0;

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['html_input'])) {
        $htmlInput = $_POST['html_input'];
        if (!empty($htmlInput)) {
            $url = 'https://www.toptal.com/developers/html-minifier/api/raw';
            $ch = curl_init();
            curl_setopt_array($ch, [
                CURLOPT_URL => $url,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_POST => true,
                CURLOPT_TIMEOUT => 30,
                CURLOPT_HTTPHEADER => ["Content-Type: application/x-www-form-urlencoded"],
                CURLOPT_POSTFIELDS => http_build_query(["input" => $htmlInput]),
                CURLOPT_USERAGENT => 'Mozilla/5.0 (compatible; HTMLMinifier)'
            ]);
            
            $minified = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            $curlError = curl_error($ch);
            curl_close($ch);
            
            if ($curlError) {
                $error = 'Error cURL: ' . $curlError;
            } elseif ($httpCode !== 200) {
                $error = 'Error API: HTTP ' . $httpCode . '. Coba lagi nanti (limit 30 req/menit).';
            } else {
                $originalSize = strlen($htmlInput);
                $minifiedSize = strlen($minified);
                $reduction = round((($originalSize - $minifiedSize) / $originalSize) * 100, 2);
            }
        } else {
            $error = 'Masukkan kode HTML terlebih dahulu.';
        }
    }
    ?>

    <form method="post" action="">
        <label for="html_input">Input HTML (paste kode HTML di sini):</label>
        <textarea id="html_input" name="html_input" autofocus 
                  placeholder="Contoh: &lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;title&gt;Test&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&lt;h1&gt;Hello World&lt;/h1&gt;&lt;/body&gt;&lt;/html&gt;"><?php echo isset($_POST['html_input']) ? htmlspecialchars($_POST['html_input']) : ''; ?></textarea>
        
        <button type="submit">🚀 Minify HTML Sekarang!</button>
    </form>

    <!-- Monetisasi -->
    <script>
        atOptions = {
            'key' : 'b525b2db453861c6cbc8a079e750e4cf',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
        };
    </script>
    <script src="https://pitofficialfollower.com/b525b2db453861c6cbc8a079e750e4cf/invoke.js"></script>

    <?php if ($minified && empty($error)): ?>
        <div class="output">
            <label>Hasil HTML Minified (copy & gunakan):</label>
            <textarea readonly><?php echo htmlspecialchars($minified); ?></textarea>
            <div class="stats">
                Ukuran asli: <?php echo number_format($originalSize); ?> bytes | 
                Ukuran minified: <?php echo number_format($minifiedSize); ?> bytes | 
                Pengurangan: <?php echo $reduction; ?>%
            </div>
        </div>
    <?php endif; ?>

    <?php if ($error): ?>
        <div class="error"><?php echo htmlspecialchars($error); ?></div>
    <?php endif; ?>
</div>

    <footer>
        &copy; 2026 HMLilder. Dibuat oleh Ardhya. Powered by Toptal HTML Minifier | Rate limit: 30 req/menit | Ukuran max: 5MB [web:7]
    </footer>

        <!-- 100% privacy-first analytics -->
    <script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
    <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade"/></noscript>
</body>
</html>
