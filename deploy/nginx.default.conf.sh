
echo "
upstream nextjs_upstream {
  server fe-nextjs:3000;
}

server { 
  listen 80;

  sendfile on;

  default_type application/octet-stream;

  gzip on;
  gzip_http_version 1.1;
  gzip_disable      \"MSIE [1-6]\.\";
  gzip_min_length   256;
  gzip_vary         on;
  gzip_proxied      expired no-cache no-store private auth;
  gzip_types        text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript;
  gzip_comp_level   9;

  root /app;

  location / {
    try_files \$uri \$uri/ /index.html =404;
  }

  location /assets/common/ {
    proxy_pass $3;
  }

  location /assets/public/ {
    proxy_pass $4;
  }

  location /assets/ {
    proxy_pass $2;
  }

  location /cdn/common/ {
    proxy_pass $3;
  }

  location /cdn/public/ {
    proxy_pass $4;
  }

  location /cdn/ {
    proxy_pass $2;
  }

  location ~ ^/(api|account|payment|report|common)/ {
    proxy_set_header EL-Real-IP \$http_cf_connecting_ip;
    proxy_set_header X-Real-IP \$remote_addr;
    proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    proxy_set_header X-NginX-Proxy true;
    proxy_pass http://$1\$request_uri;
  }
}
"
