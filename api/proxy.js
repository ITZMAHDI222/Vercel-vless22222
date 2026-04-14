export default async function handler(req, res) {
    try {
        const nodes = generateNodes();
        return res.status(200).send(nodes);
    } catch (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
    }
}

function generateNodes() {
    const vercelDomain = "vercel-vless22222.vercel.app"; // 替换为您的 Vercel 项目域名
    const uuid1 = "ec27e359-b901-483e-9c57-c406f5e4a4ca"; // 替换为您的 UUID

    const nodes = [
        {
            v: "2",
            ps: "Vercel 节点 1",
            add: "vercel-vless22222.vercel.app", // 使用 Vercel 域名
            port: "443", // Vercel 默认使用 443 端口
            id: uuid1,
            aid: "64",
            net: "ws",
            type: "vmess",
            host: "vercel-vless22222.vercel.app",
            path: "/api/proxy", // API 路径
            tls: "tls", // 启用 TLS
        },
        {
            v: "2",
            ps: "Vercel 节点 2",
            add: vercelDomain, // 使用 Vercel 域名
            port: "443", // Vercel 默认使用 443 端口
            id: uuid1,
            aid: "64",
            net: "ws",
            type: "none",
            host: "",
            path: "/api/proxy", // API 路径
            tls: "tls", // 启用 TLS
        },
    ];

    return nodes.map(node => {
        return `vmess://${Buffer.from(JSON.stringify(node)).toString('base64')}`;
    }).join('\n');
}
