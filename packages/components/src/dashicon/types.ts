export type DashiconProps = {
	/**
	 * The icon name
	 */
	icon: IconKey;

	/**
	 * Class name
	 */
	className?: string;

	/**
	 * Size of the icon
	 */
	size?: number;
};

export type IconKey =
	| 'admin-appearance'
	| 'admin-collapse'
	| 'admin-comments'
	| 'admin-customizer'
	| 'admin-generic'
	| 'admin-home'
	| 'admin-links'
	| 'admin-media'
	| 'admin-multisite'
	| 'admin-network'
	| 'admin-page'
	| 'admin-plugins'
	| 'admin-post'
	| 'admin-settings'
	| 'admin-site-alt'
	| 'admin-site-alt2'
	| 'admin-site-alt3'
	| 'admin-site'
	| 'admin-tools'
	| 'admin-users'
	| 'airplane'
	| 'album'
	| 'align-center'
	| 'align-full-width'
	| 'align-left'
	| 'align-none'
	| 'align-pull-left'
	| 'align-pull-right'
	| 'align-right'
	| 'align-wide'
	| 'amazon'
	| 'analytics'
	| 'archive'
	| 'arrow-down-alt'
	| 'arrow-down-alt2'
	| 'arrow-down'
	| 'arrow-left-alt'
	| 'arrow-left-alt2'
	| 'arrow-left'
	| 'arrow-right-alt'
	| 'arrow-right-alt2'
	| 'arrow-right'
	| 'arrow-up-alt'
	| 'arrow-up-alt2'
	| 'arrow-up'
	| 'arrow-up-duplicate'
	| 'art'
	| 'awards'
	| 'backup'
	| 'bank'
	| 'beer'
	| 'bell'
	| 'block-default'
	| 'book-alt'
	| 'book'
	| 'buddicons-activity'
	| 'buddicons-bbpress-logo'
	| 'buddicons-buddypress-logo'
	| 'buddicons-community'
	| 'buddicons-forums'
	| 'buddicons-friends'
	| 'buddicons-groups'
	| 'buddicons-pm'
	| 'buddicons-replies'
	| 'buddicons-topics'
	| 'buddicons-tracking'
	| 'building'
	| 'businessman'
	| 'businessperson'
	| 'businesswoman'
	| 'button'
	| 'calculator'
	| 'camera-alt'
	| 'car'
	| 'calendar-alt'
	| 'calendar'
	| 'camera'
	| 'carrot'
	| 'cart'
	| 'category'
	| 'chart-area'
	| 'chart-bar'
	| 'chart-line'
	| 'chart-pie'
	| 'clipboard'
	| 'clock'
	| 'cloud-saved'
	| 'cloud-upload'
	| 'cloud'
	| 'columns'
	| 'code-standards'
	| 'coffee'
	| 'color-picker'
	| 'controls-back'
	| 'controls-forward'
	| 'controls-pause'
	| 'controls-play'
	| 'controls-repeat'
	| 'controls-skipback'
	| 'controls-skipforward'
	| 'controls-volumeoff'
	| 'controls-volumeon'
	| 'cover-image'
	| 'dashboard'
	| 'database'
	| 'database-add'
	| 'database-export'
	| 'database-import'
	| 'database-remove'
	| 'database-view'
	| 'desktop'
	| 'dismiss'
	| 'download'
	| 'drumstick'
	| 'edit'
	| 'edit-large'
	| 'edit-page'
	| 'editor-aligncenter'
	| 'editor-alignleft'
	| 'editor-alignright'
	| 'editor-bold'
	| 'editor-break'
	| 'editor-code'
	| 'editor-code-duplicate'
	| 'editor-contract'
	| 'editor-customchar'
	| 'editor-expand'
	| 'editor-help'
	| 'editor-indent'
	| 'editor-insertmore'
	| 'editor-italic'
	| 'editor-justify'
	| 'editor-kitchensink'
	| 'editor-ltr'
	| 'editor-ol-rtl'
	| 'editor-ol'
	| 'editor-outdent'
	| 'editor-paragraph'
	| 'editor-paste-text'
	| 'editor-paste-word'
	| 'editor-quote'
	| 'editor-removeformatting'
	| 'editor-rtl'
	| 'editor-spellcheck'
	| 'editor-strikethrough'
	| 'editor-table'
	| 'editor-textcolor'
	| 'editor-ul'
	| 'editor-underline'
	| 'editor-unlink'
	| 'editor-video'
	| 'ellipsis'
	| 'email-alt'
	| 'email-alt2'
	| 'email'
	| 'embed-audio'
	| 'embed-generic'
	| 'embed-photo'
	| 'embed-post'
	| 'embed-video'
	| 'excerpt-view'
	| 'exit'
	| 'external'
	| 'facebook-alt'
	| 'facebook'
	| 'feedback'
	| 'filter'
	| 'flag'
	| 'food'
	| 'format-aside'
	| 'format-audio'
	| 'format-chat'
	| 'format-gallery'
	| 'format-image'
	| 'format-quote'
	| 'format-status'
	| 'format-video'
	| 'forms'
	| 'fullscreen-alt'
	| 'fullscreen-exit-alt'
	| 'games'
	| 'google'
	| 'googleplus'
	| 'grid-view'
	| 'groups'
	| 'hammer'
	| 'heading'
	| 'heart'
	| 'hidden'
	| 'hourglass'
	| 'html'
	| 'id-alt'
	| 'id'
	| 'image-crop'
	| 'image-filter'
	| 'image-flip-horizontal'
	| 'image-flip-vertical'
	| 'image-rotate-left'
	| 'image-rotate-right'
	| 'image-rotate'
	| 'images-alt'
	| 'images-alt2'
	| 'index-card'
	| 'info-outline'
	| 'info'
	| 'insert-after'
	| 'insert-before'
	| 'insert'
	| 'instagram'
	| 'keyboard-hide'
	| 'laptop'
	| 'layout'
	| 'leftright'
	| 'lightbulb'
	| 'list-view'
	| 'linkedin'
	| 'location-alt'
	| 'location'
	| 'lock-duplicate'
	| 'lock'
	| 'marker'
	| 'media-archive'
	| 'media-audio'
	| 'media-code'
	| 'media-default'
	| 'media-document'
	| 'media-interactive'
	| 'media-spreadsheet'
	| 'media-text'
	| 'media-video'
	| 'megaphone'
	| 'menu-alt'
	| 'menu-alt2'
	| 'menu-alt3'
	| 'menu'
	| 'money-alt'
	| 'microphone'
	| 'migrate'
	| 'minus'
	| 'money'
	| 'move'
	| 'nametag'
	| 'networking'
	| 'no-alt'
	| 'no'
	| 'open-folder'
	| 'palmtree'
	| 'paperclip'
	| 'performance'
	| 'pets'
	| 'pdf'
	| 'phone'
	| 'pinterest'
	| 'playlist-audio'
	| 'playlist-video'
	| 'plus-alt'
	| 'plus-light'
	| 'plus'
	| 'portfolio'
	| 'post-status'
	| 'pressthis'
	| 'products'
	| 'plugins-checked'
	| 'plus-alt2'
	| 'podio'
	| 'printer'
	| 'privacy'
	| 'randomize'
	| 'reddit'
	| 'redo'
	| 'remove'
	| 'rest-api'
	| 'rss'
	| 'saved'
	| 'schedule'
	| 'screenoptions'
	| 'search'
	| 'share-alt'
	| 'share-alt2'
	| 'share'
	| 'shield-alt'
	| 'shield'
	| 'shortcode'
	| 'slides'
	| 'smartphone'
	| 'smiley'
	| 'sort'
	| 'sos'
	| 'star-empty'
	| 'star-filled'
	| 'star-half'
	| 'sticky'
	| 'store'
	| 'spotify'
	| 'superhero'
	| 'superhero-alt'
	| 'table-col-after'
	| 'table-col-before'
	| 'table-col-delete'
	| 'table-row-after'
	| 'table-row-before'
	| 'table-row-delete'
	| 'tablet'
	| 'tag'
	| 'tagcloud'
	| 'testimonial'
	| 'text'
	| 'text-page'
	| 'thumbs-down'
	| 'thumbs-up'
	| 'tickets-alt'
	| 'tickets'
	| 'tide'
	| 'translation'
	| 'trash'
	| 'twitch'
	| 'twitter'
	| 'twitter-alt'
	| 'undo'
	| 'universal-access-alt'
	| 'universal-access'
	| 'unlock'
	| 'update-alt'
	| 'update'
	| 'upload'
	| 'vault'
	| 'video-alt'
	| 'video-alt2'
	| 'video-alt3'
	| 'visibility'
	| 'warning'
	| 'welcome-add-page'
	| 'welcome-comments'
	| 'welcome-learn-more'
	| 'welcome-view-site'
	| 'welcome-widgets-menus'
	| 'welcome-write-blog'
	| 'whatsapp'
	| 'wordpress-alt'
	| 'wordpress'
	| 'xing'
	| 'yes-alt'
	| 'yes'
	| 'youtube';
