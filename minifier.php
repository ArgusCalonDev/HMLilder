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
    <style>
        /* ===== RESET & VARIABLES ===== */
        :root {
            --primary: #4361ee;
            --secondary: #3a0ca3;
            --dark: #2b2d42;
            --light: #f8f9fa;
            --gray: #6c757d;
            --success: #4cc9f0;
            --danger: #f72585;
            --warning: #ffd166;
            --border-radius: 12px;
            --shadow: 0 8px 20px rgba(0,0,0,0.08);
            --transition: all 0.3s ease;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%);
            color: var(--dark);
            min-height: 100vh;
            padding: 20px;
            line-height: 1.6;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
        }

        form { 
            background: white; 
            padding: 20px; 
            border-radius: 8px; 
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        label { 
            display: block; 
            margin-bottom: 10px; 
            font-weight: bold; 
            color: #555;
        }
        textarea { 
            width: 100%; 
            height: 300px; 
            font-family: 'Courier New', monospace; 
            font-size: 14px; border: 1px solid #ddd; 
            border-radius: 4px; 
            padding: 10px; 
            box-sizing: border-box; 
            resize: vertical;
        }
        textarea:focus { 
            border-color: #4CAF50; 
            outline: none;
        }
        button { 
            background: #4CAF50; 
            color: white; 
            padding: 12px 30px; 
            border: none; 
            border-radius: 4px; font-size: 16px; 
            cursor: pointer; 
            margin-top: 10px;
        }
        button:hover { 
            background: #45a049; 
        }
        .output { 
            margin-top: 20px; 
        }
        .output textarea { 
            background: #f9f9f9; 
        }
        .stats { 
            margin-top: 10px; 
            font-size: 14px; 
            color: #666; 
        }
        .error { 
            color: #f44336; 
            background: #ffebee; 
            padding: 10px; 
            border-radius: 4px; 
            margin-top: 10px; 
        }
                /* ===== HEADER ===== */
        .header {
            text-align: center;
            color: #003cff;
            margin-bottom: 30px;
            padding: 25px;
            background: white;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
        }

        .logo {
            font-size: 2.8rem;
            font-weight: 800;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 10px;
        }
        
        .tagline {
            color: var(--gray);
            font-size: 1.2rem;
            margin-bottom: 15px;
        }

        footer {
            text-align: center; 
            margin-top: 30px; 
            color: #888; 
            font-size: 12px;
        }
    </style>
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
        <h1><i class="fas fa-code"></i>HMLilder - HTML Minifier</h1>

        <p>Kecilkan ukuran file HTML dengan minify file HTML milikmu.</p>

        <p>Support kami</p>
        <button onclick="window.location.href='https://saweria.co/ArdhyaDigital'">support</button>
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
</body>
</html>
