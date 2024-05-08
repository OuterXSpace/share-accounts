echo "
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
  worker_connections  1024;
}


http {
  include       /etc/nginx/mime.types;
  default_type  application/octet-stream;

  large_client_header_buffers 32 64k;
  proxy_buffers 32 64k;
  proxy_buffer_size 8k;

  log_format main '[\$time_local] \$remote_addr - \$proxy_add_x_forwarded_for - \$remote_user -'
    '\$server_name to: \$upstream_addr: \$request upstream_response_time'
    '\$upstream_response_time msec \$msec request_time \$request_time';

  access_log  /var/log/nginx/access.log main;

  sendfile        on;
  #tcp_nopush     on;
  real_ip_recursive on;

  keepalive_timeout  65;

  #gzip  on;
  include /etc/nginx/conf.d/*.conf;
}
"