# Base image with Apache and PHP 8
FROM php:8.2-apache

# Copy project files into the container’s web root
COPY . /var/www/html/

# Enable Apache mod_rewrite (optional but good for PHP routing)
RUN a2enmod rewrite

# Set permissions
RUN chown -R www-data:www-data /var/www/html

# Expose port 80 for web traffic
EXPOSE 80

# Start Apache server
CMD ["apache2-foreground"]
