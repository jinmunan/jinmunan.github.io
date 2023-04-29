import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/": [
        {
            text: "Java",
            icon: "java",
            prefix: "Java/",
            children: [
                {
                    text: "JavaSE",
                    icon: "java",
                    prefix: "JavaSE/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "JavaWeb",
                    icon: "java",
                    prefix: "JavaWeb/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "JDBC",
                    icon: "java",
                    prefix: "JDBC/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "JDK",
                    icon: "java",
                    prefix: "JDK/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "JUC",
                    icon: "java",
                    prefix: "JUC/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "JVM",
                    icon: "java",
                    prefix: "JVM/",
                    children: "structure",
                    collapsible: true
                },
            ],
            collapsible: true
        },
        {
            text: "数据库",
            icon: "mysql",
            prefix: "Database/",
            children: [
                {
                    text: "Elasticsearch",
                    icon: "mysql",
                    prefix: "Elasticsearch/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "H2",
                    icon: "mysql",
                    prefix: "H2/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "MySQL",
                    icon: "mysql",
                    prefix: "MySQL/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Oracle",
                    icon: "mysql",
                    prefix: "Oracle/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Redis",
                    icon: "mysql",
                    prefix: "Redis/",
                    children: "structure",
                    collapsible: true
                },
            ],
            collapsible: true
        }, {
            text: "开发工具",
            icon: "tool",
            prefix: "DevTools/",
            children: [
                {
                    text: "Docker",
                    icon: "tool",
                    prefix: "Docker/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "IDEA",
                    icon: "tool",
                    prefix: "IDEA/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Kubernetes",
                    icon: "tool",
                    prefix: "Kubernetes/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Linux",
                    icon: "tool",
                    prefix: "Linux/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Maven",
                    icon: "tool",
                    prefix: "Maven/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Typora",
                    icon: "tool",
                    prefix: "Typora/",
                    children: "structure",
                    collapsible: true
                },
            ],
            collapsible: true
        }, {
            text: "开发框架",
            icon: "leaf",
            prefix: "DevFrames/",
            children: [
                {
                    text: "MyBatis",
                    icon: "leaf",
                    prefix: "MyBatis/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "MyBatis-Plus",
                    icon: "leaf",
                    prefix: "MyBatis-Plus/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Spring",
                    icon: "leaf",
                    prefix: "Spring/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Spring MVC",
                    icon: "leaf",
                    prefix: "Spring MVC/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "SSM",
                    icon: "leaf",
                    prefix: "SSM/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "SpringBoot",
                    icon: "leaf",
                    prefix: "SpringBoot/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Spring Cloud Alibaba",
                    icon: "leaf",
                    prefix: "Spring Cloud Alibaba/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "tkMapper",
                    icon: "leaf",
                    prefix: "tkMapper/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Dubbo",
                    icon: "leaf",
                    prefix: "Dubbo/",
                    children: "structure",
                    collapsible: true
                },
            ],
            collapsible: true
        }, {
            text: "中间件技术",
            icon: "nginx",
            prefix: "MiddleWare/",
            children: [
                {
                    text: "Nginx",
                    icon: "nginx",
                    prefix: "Nginx/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "RabbitMQ",
                    icon: "nginx",
                    prefix: "RabbitMQ/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Tomcat",
                    icon: "nginx",
                    prefix: "Tomcat/",
                    children: "structure",
                    collapsible: true
                },
            ],
            collapsible: true
        }, {
            text: "计算机基础",
            icon: "computer",
            prefix: "Computer/",
            children: [
                {
                    text: "Algorithm",
                    icon: "computer",
                    prefix: "Algorithm/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Cryptography",
                    icon: "computer",
                    prefix: "Cryptography/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Datastructure",
                    icon: "computer",
                    prefix: "Datastructure/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "DesignPattern",
                    icon: "computer",
                    prefix: "DesignPattern/",
                    children: "structure",
                    collapsible: true
                },
            ],
            collapsible: true
        }, {
            text: "前端笔记",
            icon: "html",
            prefix: "FrontEnd/",
            children: [
                {
                    text: "HTML",
                    icon: "html",
                    prefix: "HTML/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "CSS",
                    icon: "html",
                    prefix: "CSS/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "JavaScript",
                    icon: "html",
                    prefix: "JavaScript/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "jQuery",
                    icon: "html",
                    prefix: "jQuery/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "AJAX",
                    icon: "html",
                    prefix: "AJAX/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "axios",
                    icon: "html",
                    prefix: "axios/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "JSON",
                    icon: "html",
                    prefix: "JSON/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "JSModule",
                    icon: "html",
                    prefix: "JSModule/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Bootstrap",
                    icon: "html",
                    prefix: "Bootstrap/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "LayUI",
                    icon: "html",
                    prefix: "LayUI/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Git",
                    icon: "html",
                    prefix: "Git/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "ES6",
                    icon: "html",
                    prefix: "ES6/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "NodeJS",
                    icon: "html",
                    prefix: "NodeJS/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Promise",
                    icon: "html",
                    prefix: "Promise/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Less",
                    icon: "html",
                    prefix: "Less/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Vue2",
                    icon: "html",
                    prefix: "Vue2/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Vue3",
                    icon: "html",
                    prefix: "Vue3/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Webpack5",
                    icon: "html",
                    prefix: "Webpack5/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "React",
                    icon: "html",
                    prefix: "React/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "TypeScript",
                    icon: "html",
                    prefix: "TypeScript/",
                    children: "structure",
                    collapsible: true
                },
            ],
            collapsible: true
        }, {
            text: "关于本站",
            icon: "anonymous",
            prefix: "About/",
            children: [
                {
                    text: "About",
                    icon: "anonymous",
                    prefix: "About/",
                    children: "structure",
                    collapsible: true
                },
                {
                    text: "Experience",
                    icon: "anonymous",
                    prefix: "Experience/",
                    children: "structure",
                    collapsible: true
                },
            ],
            collapsible: true
        }
    ]
});