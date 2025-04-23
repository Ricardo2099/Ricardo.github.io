FROM httpd:latest

# Copiamos los archivos compilados al directorio que Apache utiliza:
COPY dist/mycv/browser/ /usr/local/apache2/htdocs/

EXPOSE 80
