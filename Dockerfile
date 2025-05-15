FROM php:8.0-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    unzip \
    git \
    curl

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy your application code
COPY . /var/www/html/

# Install PHP extensions
RUN docker-php-ext-install mysqli

# Install Composer dependencies
WORKDIR /var/www/html/
RUN composer install

# Expose port 80 and start Apache
EXPOSE 80
CMD ["apache2-foreground"]
