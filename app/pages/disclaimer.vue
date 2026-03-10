<script setup lang="ts">
	import { CANONICAL_URL } from '~/lib/constants';
	const title = 'Privacy & Terms';

	useHead({
		title,
		link: [{ rel: 'canonical', href: `${CANONICAL_URL}/disclaimer` }],
	});
</script>

<template>
	<div class="mx-auto flex max-w-[800px] flex-col gap-12">
		<header className="flex flex-col justify-center items-center gap-4">
			<h1>Privacy & Terms</h1>
			<p class="text-sm">Last updated: March, 2026</p>
		</header>
		<section class="flex flex-col gap-4">
			<h2 class="text-xl">Overview</h2>
			<p>
				Golden West Model Horse Show (r2champnca.com) is an informational
				website. It does not provide user accounts, login functionality, or
				interactive features that collect personal information. By using this
				website, you agree to the terms described on this page.
			</p>
		</section>
		<section class="flex flex-col gap-4">
			<h2 class="text-xl">Information Collection</h2>
			<p>
				This website does not request, collect, or store personal information
				from visitors. There are no user accounts, login systems, comment
				systems, forms, or other features that request personal data. This
				website does not process or store payment information. This website does not use cookies or tracking technologies.</p>
			<p>
				However, the site links to a third-party service (Google Docs) for event
				registration. Any personal or payment information submitted through
				Google Docs is provided directly to the third-party provider and is
				governed by that provider's privacy policies. Users should review the
				privacy policies and terms of the applicable third-party provider before
				submitting information.
			</p>
		</section>
		<section class="flex flex-col gap-4">
			<h2 class="text-xl">Technical Data and Server Logs</h2>
			<p>
				Like most websites, basic technical information may be logged
				automatically by hosting infrastructure in order to operate and secure
				the service. This may include information such as:
			</p>
			<ul className="list-disc px-4 my-4">
				<li>IP address</li>
				<li>Browser type</li>
				<li>Device information</li>
				<li>Pages requested</li>
				<li>Timestamps of requests</li>
			</ul>
			<p>
				This information is not used to personally identify visitors and is only
				used for operational and security purposes.
			</p>
		</section>
		<section class="flex flex-col gap-4">
			<h2 class="text-xl">Third-Party Infrastructure</h2>
			<p>
				The site may be delivered through third-party infrastructure such as
				hosting providers, content delivery networks (CDNs), or DNS services.
				These services may collect limited technical data necessary to operate
				their systems.
			</p>
		</section>
		<section class="flex flex-col gap-4">
			<h2 class="text-xl">Content</h2>
			<p>
				The content on this website is provided for general informational
				purposes only. While reasonable effort may be made to keep information
				accurate, the site makes no guarantees regarding the completeness,
				accuracy, or timeliness of the information presented. Content may
				contain errors or become outdated.
			</p>
		</section>
		<section class="flex flex-col gap-4">
			<h2 class="text-xl">Site Availability and Bugs</h2>
			<p>
				This website is provided “as is.” The site may contain bugs or technical
				issues that may or may not be corrected. The website may be modified,
				suspended, or permanently shut down at any time and for any reason
				without notice.
			</p>
		</section>
		<section class="flex flex-col gap-4">
			<h2 class="text-xl">Limitation of Liability</h2>
			<p>
				The information and content on this website are provided for general
				informational purposes only and are offered “as is” without warranties
				of any kind, express or implied.
			</p>
			<p>
				To the fullest extent permitted by law, the operator of this website
				shall not be liable for any loss, damage, or inconvenience arising from
				the use of the site or reliance on its content. This includes, but is
				not limited to, errors or omissions in the information provided,
				temporary unavailability of the website, technical issues, or actions
				taken by visitors based on information presented on the site.
			</p>
		</section>
		<section class="flex flex-col gap-4">
			<h2 class="text-xl">Changes to This Policy</h2>
			<p>
				This Privacy & Terms page may be updated or modified at any time without
				prior notice. Continued use of the site after changes are made
				constitutes acceptance of the updated terms.
			</p>
		</section>
	</div>
</template>
