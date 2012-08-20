use strict;
use warnings;
use utf8;
use encoding "utf8";
use Regexp::Assemble;

my $ra = Regexp::Assemble->new;
while (<>) {
	$ra->add($_);
}
print $ra->as_string;

