// 安全头
const securityHeaders = {
    'Content-Type': 'text/html;charset=UTF-8',
    'Cache-Control': 'public, max-age=3600',
    'Content-Security-Policy': "default-src 'self' https: raw.githubusercontent.com; style-src 'unsafe-inline'; script-src 'unsafe-inline'",
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
};

// 订阅源配置
const SUBSCRIPTION_URLS = {
    base64: 'https://raw.githubusercontent.com/peasoft/NoMoreWalls/master/list.txt',
    clash: 'https://raw.githubusercontent.com/peasoft/NoMoreWalls/master/list.yml',
    meta: 'https://raw.githubusercontent.com/peasoft/NoMoreWalls/master/list.meta.yml',
    raw: 'https://raw.githubusercontent.com/peasoft/NoMoreWalls/master/list_raw.txt'
};

// HTML 内容
const HTML_CONTENT = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NodeHub - NoMoreWalls节点导航</title>
    <style>
        :root {
            --primary-color: #ff9000;
            --secondary-color: #000000;
            --background-color: #0f0f0f;
            --card-background: #1b1b1b;
            --text-color: #ffffff;
            --text-secondary: #cccccc;
            --shadow: 0 4px 6px rgba(0,0,0,0.3);
            --max-width: 1100px;
            --spacing: 20px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--background-color);
            padding: var(--spacing);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .container {
            max-width: var(--max-width);
            margin: 0 auto;
            width: 100%;
        }

        header {
            text-align: center;
            padding: 25px 15px;
            margin-bottom: var(--spacing);
            background: var(--secondary-color);
            border-radius: 5px;
            border: 1px solid #222;
        }

        .logo {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 10px;
        }

        h1 {
            font-size: 2.8em;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        h1 span:first-child {
            color: white;
        }

        h1 span:last-child {
            color: var(--primary-color);
            background: var(--primary-color);
            padding: 0 10px;
            border-radius: 5px;
            color: black;
        }

        .project-intro {
            margin-bottom: var(--spacing);
            padding: 20px;
            background: var(--card-background);
            border-radius: 5px;
            border: 1px solid #222;
        }

        .project-intro h2 {
            color: var(--primary-color);
            margin-bottom: 15px;
            font-size: 1.5em;
            display: inline-block;
            background: var(--secondary-color);
            padding: 5px 15px;
            border-radius: 3px;
        }

        .subscription-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 15px;
            margin-bottom: var(--spacing);
        }

        .card {
            background: var(--card-background);
            border-radius: 5px;
            padding: 20px;
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid #222;
        }

        .card:hover {
            transform: translateY(-3px);
            border-color: var(--primary-color);
        }

        .button {
            width: 100%;
            padding: 12px;
            background-color: var(--primary-color);
            color: var(--secondary-color);
            border: none;
            border-radius: 3px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.9em;
            text-transform: uppercase;
        }

        .button:hover {
            background-color: #ffa31a;
            transform: translateY(-2px);
        }

        .features {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin: 20px 0;
        }

        .feature-item {
            padding: 15px;
            background: var(--secondary-color);
            border-radius: 5px;
            text-align: center;
            border: 1px solid #222;
        }

        .feature-item h4 {
            color: var(--primary-color);
            margin-bottom: 8px;
            font-size: 1.1em;
        }

        .update-info {
            display: flex;
            gap: 20px;
            margin-top: 20px;
            padding: 15px;
            background: var(--secondary-color);
            border-radius: 5px;
            border: 1px solid #222;
        }

        .project-links {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }

        .project-links a {
            padding: 10px 20px;
            background: var(--secondary-color);
            color: var(--primary-color);
            text-decoration: none;
            border-radius: 3px;
            border: 1px solid var(--primary-color);
            transition: all 0.3s ease;
            font-weight: 600;
            text-transform: uppercase;
        }

        .project-links a:hover {
            background: var(--primary-color);
            color: var(--secondary-color);
        }

        footer {
            margin-top: auto;
            text-align: center;
            padding: 20px;
            background: var(--secondary-color);
            border-radius: 5px;
            border: 1px solid #222;
        }

        footer p {
            color: #666;
            font-size: 0.9em;
        }

        footer a {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
        }

        footer a:hover {
            color: #ffa31a;
        }

        footer span {
            color: #444;
            margin: 0 8px;
        }

        @media (max-width: 768px) {
            .features {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 480px) {
            .features {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1><span>Node</span><span>Hub</span></h1>
            <p>NoMoreWalls节点导航服务</p>
        </header>

        <main>
            <div class="project-intro">
                <h2>关于 NoMoreWalls</h2>
                <p>NoMoreWalls 是一个强大的节点聚合工具，自动抓取合并互联网上的公开节点。通过 GitHub Actions 定时更新，所有节点经过严格筛选，确保可用性。</p>
                
                <div class="features">
                    <div class="feature-item">
                        <h4>多格式支持</h4>
                        <p>支持多种订阅格式</p>
                    </div>
                    <div class="feature-item">
                        <h4>自动更新</h4>
                        <p>定时抓取更新节点</p>
                    </div>
                    <div class="feature-item">
                        <h4>节点筛选</h4>
                        <p>自动检测可用性</p>
                    </div>
                </div>

                <div class="update-info">
                    <p>⚡️ 节点定时自动更新</p>
                    <p>🔍 支持多种客户端订阅</p>
                </div>

                <div class="project-links">
                    <a href="https://github.com/peasoft/NoMoreWalls" target="_blank">GitHub 仓库</a>
                    <a href="https://peasoft.github.io/NWalls.html" target="_blank">项目镜像</a>
                </div>
            </div>

            <section class="subscription-list">
                <div class="card">
                    <h3>Base64 订阅</h3>
                    <p class="card-desc">适用于 v2ray 系列客户端</p>
                    <button class="button" onclick="copyToClipboard('${SUBSCRIPTION_URLS.base64}', this)">复制链接</button>
                </div>
                <div class="card">
                    <h3>Clash 订阅</h3>
                    <p class="card-desc">适用于 Clash 系列客户端</p>
                    <button class="button" onclick="copyToClipboard('${SUBSCRIPTION_URLS.clash}', this)">复制链接</button>
                </div>
                <div class="card">
                    <h3>Clash Meta</h3>
                    <p class="card-desc">适用于 Clash Meta 客户端</p>
                    <button class="button" onclick="copyToClipboard('${SUBSCRIPTION_URLS.meta}', this)">复制链接</button>
                </div>
                <div class="card">
                    <h3>原始节点</h3>
                    <p class="card-desc">未经转换的原始节点列表</p>
                    <button class="button" onclick="copyToClipboard('${SUBSCRIPTION_URLS.raw}', this)">复制链接</button>
                </div>
            </section>
        </main>

        <footer>
            <p>数据来源：<a href="https://github.com/peasoft/NoMoreWalls" target="_blank">NoMoreWalls</a><span>|</span><a href="https://peasoft.github.io/NWalls.html" target="_blank">镜像站</a></p>
        </footer>
    </div>

    <style>
        /* 添加卡片描述样式 */
        .card-desc {
            color: #666;
            font-size: 0.9em;
            margin: 8px 0 15px;
        }
    </style>

    <script>
        function copyToClipboard(text, button) {
            navigator.clipboard.writeText(text).then(() => {
                button.classList.add('copy-tooltip', 'show');
                setTimeout(() => {
                    button.classList.remove('show');
                }, 2000);
            }).catch(err => {
                console.error('复制失败:', err);
            });
        }
    </script>
</body>
</html>`;

// 请求处理
async function handleRequest(request) {
    const url = new URL(request.url);
    
    // 强制使用 HTTPS
    if (url.protocol === 'http:') {
        return Response.redirect(`https://${url.host}${url.pathname}${url.search}`, 301);
    }

    return new Response(HTML_CONTENT, {
        headers: securityHeaders
    });
}

// 事件监听器
addEventListener('fetch', event => {
    event.respondWith(
        handleRequest(event.request).catch(err => {
            return new Response('服务暂时不可用', { status: 500 })
        })
    );
});