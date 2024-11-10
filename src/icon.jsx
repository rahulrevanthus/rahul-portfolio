import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/mdi/github';
import linkedinIcon from '@iconify-icons/mdi/linkedin';

function SocialLinks() {
    return (
        <div>
            <Icon icon={githubIcon} style={{ fontSize: '32px', color: 'black' }} />
            <Icon icon={linkedinIcon} style={{ fontSize: '32px', color: '#0a66c2' }} />
        </div>
    );
}

export default SocialLinks;
